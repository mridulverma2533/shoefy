const mongoose = require("mongoose");
const tokenSchema=new mongoose.Schema({
    userId:{
         type:String
      },   
    hash:{
        type:String
    },
    from:{
        type:String
    },
    to:{
       type:String
    },
    status:{
        type:String
    },
     da:{
        token:{
            count:{
                type:String
            },
        nft:{
            contractaddress:{
                type:String
            },
            tokenId:{
                type:String
            },
            count:{
                type:String
            }

        }
        }



    },

    address:{
        type:String
    }
},{timestamps:true,versionKey: false })

module.exports =mongoose.model("token",tokenSchema);