const mongoose = require("mongoose");


const registerSchema=new mongoose.Schema({
    email:{
        type:String
    },
    nickname:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:mongoose.Types.ObjectId,
        ref:"wallet"
    }


},{timestamps:true,versionKey: false })

module.exports =mongoose.model("register",registerSchema);