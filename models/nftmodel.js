const mongoose = require("mongoose");
const nftSchema=new mongoose.Schema({
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
    data:{
        token:{
            type:String
        },
        nft:{
            contractaddress:{
                type:String
            },
            tokenId:{
              type:String
            }
        }

    },
    address:{
        type:String
    }
},{timestamps:true,versionKey: false })

module.exports =mongoose.model("nft",nftSchema);