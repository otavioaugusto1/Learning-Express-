const { salvar } = require("./usuario")

module.exports = (app, texto) =>{
    function salvar(req,res){
        res.send("Usuário > salvar" + texto)
    }
    function obter(req,res){
        res.send("Usuário > obter" + texto)
    }
    app.post("/produto",salvar)
    app.get("/produto",obter)
    return {salvar, obter}
}