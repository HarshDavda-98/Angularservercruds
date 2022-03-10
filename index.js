const mongoose = require('mongoose');
const expresss = require('express');
const  bodyParser =require("body-parser");
const  cors =require("cors");
const app = expresss();
const Route = require('./Router/Routers')
const dotenv = require("dotenv")  
dotenv.config({path:"./config.env"});
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
})
app.get('/',(req,res)=>{
    res.send("Connected to server main page")
})
app.use(Route);
const port = process.env.PORT || 1988
const Port = process.env.DATABASE;

mongoose.connect (Port,()=>{console.log("mongoose connected")}).then(()=>{
}).catch((err)=>console.log(err));
app.listen(port,()=>{console.log(`http://localhost:${port}`)});