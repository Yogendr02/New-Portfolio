const {projectmodel} = require("../models/projectmodel")

const projectpost = async(req,res)=>{
    await projectmodel.create(req.body)
    res.sendStatus(200)
}

const projectget = async(req,res)=>{
    const message = await projectmodel.find()
    res.send(message)
}

module.exports = {projectpost,projectget} 