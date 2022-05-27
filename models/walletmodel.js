const mongoose = require("mongoose");


const walletSchema=new mongoose.Schema({
    wallet:{
        ingametoken:{
            type:String,
            // default:0
        },
        nft:[
            {
            contractaddress:{
                type:String,
                // default:1
            },
            tokenid:{
                type:String,
                // default:1
            },
            count:{
                type:String,
                // default:1
            },
            
        }
    ]


    }


},{timestamps:true,versionKey: false })

module.exports =mongoose.model("wallet",walletSchema);