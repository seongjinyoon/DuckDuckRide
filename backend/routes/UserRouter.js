// Construct Router
const express = require("express")
const router = express.Router()
const UserModel = require("../models/UserModel")

router.get("/",(req,res)=>{
    res.send({ok:1})
})

router.post("/",async (req,res)=>{
    console.log(req.body)
    let {username,password} = req.body

    let data = await UserModel.find({username})
    console.log(data)
    if(data.length === 1){
        if(password === data[0].password){
            console.log("Logined In: ", data)
            res.send({ok:1,id:data[0]._id})
            return;
        }   
    }
    if(data.length <= 0){
        data = await UserModel.create({username,password})
        console.log("Created: ", data)
        res.send({ok:1, id:data._id})
        return;
    }
    console.log("failed")
    res.send({ok:0})
})



module.exports = router