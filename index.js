const express = require('express')
const app = express()

app.use('/',(req,res) =>{
    res.send("Estou <b> bem.</b>")
})

app.listen(3030, () => console.log("Backend executando..."))