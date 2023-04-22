// Construct Router
const express = require("express")
const router = express.Router()
const UserModel = require("../models/UserModel")

router.get("/",(req,res)=>{
    res.send({ok:1})
})

router.post("/",(req,res)=>{
    console.log(req.body)
    let {username,password,age} = req.body
    UserModel.create({username,password,age:20})
})

module.exports = router