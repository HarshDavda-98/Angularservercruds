const mongoose = require('mongoose')

const Data = new mongoose.Schema({
    id:{
        type:String,
    },
    Mobile:{
        type:Number,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    },
    Discription:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    }
});
const UserDetails = mongoose.model("UserDetails",Data);
module.exports = {UserDetails}