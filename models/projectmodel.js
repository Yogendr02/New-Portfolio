const mongoose = require("mongoose")

const project = new mongoose.Schema({
    link:String,
    head:String,
    desc:String
    
})

const projectmodel = mongoose.model("projectdetail",project)

module.exports = {project,projectmodel}