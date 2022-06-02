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
        const user = await User.findOne({password:req.body.password})
        if(user){
            const result = await User.findOne({nickname:req.body.nickname})
            .populate("address")
            if(!result){
                res.json("nickname not matched")
            }else{
            // const user = await User.findOne({nickname:req.body.nickname})
            // .populate("address")
            const token = await jwt.sign({ _id: user._id },"this is my",{ expiresIn: '1d' });
            res.send({result,token})
            }
        }else{
            res.json("password not matched")
        }
 
    }catch(e){
        console.log(e);
        res.send(e)
    }
},

exports.wallet=async(req,res)=>{
    try{
      const user = req.user;
      console.log(user);
      const data = await wallet(req.body)
      const result = await data.save()
      return successResponseWithData(res, "Success",result);
    }catch(e){
        console.log(e);
        return ErrorResponse(res, "error")

    }
},
exports.find=async(req,res)=>{
    try{
    //    const user = req.params.id
    const fg = await web3.eth.getTransactionReceipt ('0xf8c7f43fb718f34110113982434760200c879026273acd6b82669bf93d8ab54a')
    // console.log(fg.logs);
    fg.logs.map(fh=>{
        console.log(fh.topics[0]);
    })
    }catch(e){
        console.log(e);
        return ErrorResponse(res, "error")
    }
},
exports.addhash=async(req,res)=>{
    try{
        const {hash,address,count}=req.body
        // const (da.token= req.body
        const af =await web3.eth.getTransactionReceipt(hash)
        const user = req.user;
        console.log(user);
         const id = user._id;
        // var sd = await  User.findById(id)
        const result = af.from
        const ac = af.to
        const bt = af.status
        const dat = await web3.eth.getTransaction(hash)
        const ad = dat.value
        const wei = parseInt(ad)/1000000000000000000
        console.log(wei);
        if(bt==false){
            res.json("transaction failed")
        }else if(result==address,count){
              const data = await Token({from:result,to:ac,hash:hash,status:bt,count:count,address:address,userId:id})

              const at = await data.save()
             res.json({status:101,message:"success"})
        }else{
            res.json("not matched")
        }
    }catch(e){
        console.log(e);
        res.send(e)
    }
},
exports.nfttable=async(req,res)=>{
    try{
        


    }catch(e){
        console.log(e);
        res.send(e)
    }
}