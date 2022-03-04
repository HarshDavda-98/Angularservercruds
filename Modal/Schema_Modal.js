const mongoose = require('mongoose')

const Data = new mongoose.Schema({
    id:{
        type:Number,
    },
    Name:{
        type:String,
    },
    Discription:{
        type:String,
    },
    Email:{
        type:String,
    }
});

const UserDetails = mongoose.model("UserDetails",Data);
module.exports = {UserDetails}