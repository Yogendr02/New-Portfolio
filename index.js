const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

const server = http.createServer(app)
const mongoose = require("mongoose")

const {projectpost,projectget} = require("./routes/projectroute")
const midd = (req,res,next)=>{
    res.send("oo");
    next();
}
const pro = async()=>{
    const keyss = "mongodb+srv://Yogendra:jL2sQnBN0jy1IoGf@cluster0.sd1mvmw.mongodb.net/?retryWrites=true&w=majority"
    try{await mongoose.connect(keyss).then(()=>{console.log("connected to server")})}catch{console.log("connection denied")}
    app.get("/",(req,res)=>{res.send("yoyo")})
    app.get("/proget",projectget)
    app.post("/propost",projectpost)
    app.all("*",(req,res)=>{res,send("donot found this page")})
    
}


pro()

const PORT = process.env.PORT || 3001
server.listen(PORT,()=>{
    console.log(`server connected to 3001`)
})