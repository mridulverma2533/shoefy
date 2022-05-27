const User = require("../models/registermodel")
const Web3 = require('web3');
const Token = require("../models/tokenmodel")
const mongoose = require("mongoose");
const wallet = require("../models/walletmodel") 
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/registermodel");
const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"))
const { successResponseWithData, ErrorResponse } = require("../helper/apirespnse");

exports.register= async(req,res)=>{
    try{
        const data = await User.findOne({nickname:req.body.nickname})
        const dat = await User.findOne({email:req.body.email})
        if(data){
            res.json({status:102,message:"nickname already exist"})
            // return successResponseWithData(res, "nickname already exist");
         }else if(dat){
            // return successResponseWithData(res, "email already exist");
            res.json({status:104,message:"email already exist"})
        //       const user = await User(req.body)
        //   const result = await user.save()
        // return successResponseWithData(res, "Success",result);
         }else{
           const user = await User(req.body)
          const result = await user.save()
        // return successResponseWithData(res, "Success");
        res.json({status:101,message:"success"})
         }

    }catch(e){
        console.log(e);
        return ErrorResponse(res, "error")
    }
},
exports.login=async(req,res)=>{
    try{
        const user = await User.findOne({nickname:req.body.nickname})
        // .populate("address")
        !user && ErrorResponse(res, "error")
        if(user){
            const result = await User.findOne({password:req.body.password})
            // const  data = await User.findOne().populate('address');
            .populate("address")
              if(!result){
                return ErrorResponse(res, "error")
              }else{
                const token = await jwt.sign({ _id: user._id },"this is my",{ expiresIn: '1d' });
                
                // return successResponseWithData(res, "Success",token,result);
                res.send({result,token})
                
              } 
        }
    }catch(e){
        console.log(e);
        return ErrorResponse(res, "error")
    }
},

exports.wallet=async(req,res)=>{
    try{
      const user = req.user;
      const data = await wallet(req.body)
      const result = await data.save()
      return successResponseWithData(res, "Success",result);
    }catch(e){
        console.log(e);
        return ErrorResponse(res, "error")

    }
},
// exports.find=async(req,res)=>{
//     try{
//        const user = req.params.id
//        const data = await User.findOne({user})
//        .populate("da")
//        res.send(data)
//     }catch(e){
//         console.log(e);
//         return ErrorResponse(res, "error")
//     }
// },
exports.addhash=async(req,res)=>{
    try{
        const user = req.user;
        const id = user._id;
        // const data = await Token(req.body)
        const {hash}=req.body

        const af =await web3.eth.getTransactionReceipt(hash)
        // const ad = await Token(req.body)
        const result = af.from          
        if(result==id){
            const data = await Token(req.body)
            const at = await data.save()
            res.json({status:101,message:"success"})
        }else{
            res.json("hash is not verified")
        }
        

    }catch(e){
        console.log(e);
        res.send(e)
    }
}