const mongoose = require('mongoose');
const expresss = require('express');
const  bodyParser =require("body-parser");
const  cors =require("cors");
const app = expresss();
const Route = require('./Router/Routers')
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 

app.get('/',(req,res)=>{
    res.send("Connected to server main page")
})
app.use(Route);
app.use(cors());
const port = process.env.PORT || 1988
const Port = "mongodb+srv://Nodejstutorial:Nodejstutorial123@cluster0.0y601.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect (Port,()=>{console.log("mongoose connected")}).then(()=>{
}).catch((err)=>console.log(err));
app.listen(port,()=>{console.log(`http://localhost:${port}`)});