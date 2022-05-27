const mongoose = require("mongoose");
const tokenSchema=new mongoose.Schema({
    hash:{
        type:String
    }
})

module.exports =mongoose.model("token",tokenSchema);