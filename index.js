const express = require('express')
const saudacao = require("./saudacaoMid")
const bodyParser = require("body-parser")
const usuarioApi = require("./api/usuario")

const app = express()
require("./api/produtos")(app,"Com param!")

app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)
// Função midleware recebe REQ, RES e NEXT ou até msm sem o NEXT
app.use(saudacao("Otávio"))

//com body-parser
app.use(bodyParser.text())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended = true}))

app.post("/corpo",(req,res) =>{
    //let corpo = ''
    //req.on("data",function(parte){
      //  corpo += parte
    //})
    //req.on("end", function(){
    res.send(req.body)

})
// sem body-parser

app.post("/corpo",(req,res) =>{
    let corpo = ''
    req.on("data",function(parte){
        corpo += parte
    })
    req.on("end", function(){
        res.send(corpo)
    })
})

//
app.use('/',(req,res,next)  =>{
    console.log("Antes")
    next()
})

app.get("/clientes/relatorio",(req,res) =>{
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
    // na url: localhost:3030/clientes/relatorio?completo=true&ano=2021
})

app.get("/clientes/:id",(req,res,next) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
    
})
app.post("/corpo",(req,res) =>{
    let corpo = ''
    req.on("data",function(parte){
        corpo += parte
    })
    req.on("end", function(){
        res.send(corpo)
    })
})


app.use('/',(req,res,next) =>{
    //res.json({
    //    name: "Ipad 32gb",
    //    price: 1899.00,
    //    discount: 0.12
    //})
    
    //res.send("Estou <b> bem.</b>")
    console.log("Durante")
    res.json({
        data: [{id:7, nome: "Otavio",position:1},
        {id:17, nome: "Ana",position:2},
        {id:27, nome: "Maria",position:3}
    ],
    count:30,
    skip:0,
    limit:3,
    status:200
    })
    next()
})
app.use('/',(req,res)  =>{
    console.log("Depois")
})

app.listen(3030, () => console.log("Backend executando..."))