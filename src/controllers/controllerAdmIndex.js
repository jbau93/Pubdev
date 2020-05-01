const modelUsuariosAdm = require("../model/modelUsuariosAdm");
var controllerAdmIndex ={
    db:null
}
controllerAdmIndex.guardarDb = (db)=>{
	this.db=db
} 
controllerAdmIndex.renderAdmIndexPage = (req, res) => {
    res.render("../../views/admIndex")
}
controllerAdmIndex.renderAdmLoginPage = (req, res) => {
    res.render("../../views/admLogin")
}
controllerAdmIndex.VerificarSiEsAdm =(req, res)=>{
    //console.log(req.body)
    const newObjModelo = new modelUsuariosAdm(req.body, this.db)
    var stado = newObjModelo.logearAdm()
    res.json(stado)
}
module.exports=controllerAdmIndex