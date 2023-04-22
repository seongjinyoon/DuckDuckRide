// Construct Router
const express = require("express")
const router = express.Router()
const RideModel = require("../models/RideModel")
const geolib = require("geolib")


// Controller
const RideController = require("../controllers/RideController")

router.get("/",async (req,res)=>{
    console.log(req.query)
    if(req.query.ridedistance==='true'){
        let data = await RideModel.find({"_id":req.query.id})
        if(req.query.index===undefined){
            let distanceList = []
            let ridesLen = await RideModel.find({"_id":req.query.id}).count()
            
            for(var i=0; i<ridesLen;i++){
                let start = {
                    latitude: parseFloat(data[0].stLat[i]) ,
                    longitude: parseFloat(data[0].stLon[i])
                }
                let end = {
                    latitude: parseFloat(data[0].enLat[i]),
                    longitude: parseFloat(data[0].enLon[i])
                }
                // console.log(start, end)
                // console.log(geolib.getDistance(start,end))
                distanceList.push(0.000621371 * geolib.getDistance(start,end))
            }
            res.send(distanceList)
        }else{
            let start = {
                latitude: parseFloat(data[0].stLat[req.query.index]) ,
                longitude: parseFloat(data[0].stLon[req.query.index])
            }
            let end = {
                latitude: parseFloat(data[0].enLat[req.query.index]),
                longitude: parseFloat(data[0].enLon[req.query.index])
            }
            // console.log(start, end)
            // console.log(geolib.getDistance(start,end))
            res.send([0.000621371 * geolib.getDistance(start,end)])
        }
    }
    else if(req.query.findstart===true){

    }
    else if(req.query.sort===true){

    }
    else{
        console.log("Here")
        let data = await RideModel.find()
        res.send(data)
    }
    
    
})

router.post("/",(req,res)=>{
    console.log(req.body)
    let {driverId,customersId,stLat,stLon,enLat,enLon,date} = req.body
    if(driverId===undefined){}
    if(customersId===undefined){customersId=[]}
    if(stLat===undefined){stLat=[]}
    if(stLon===undefined){stLon=[]}
    if(enLat===undefined){enLat=[]}
    if(enLon===undefined){enLon=[]}
    date = Date.now()

    console.log(driverId," ",customersId," ",stLat," ",stLon," ",enLat," ",enLon)
    RideModel.create({
        driverId,customersId,stLat,stLon,enLat,enLon,date
    })
    res.send({ok:1})
})

module.exports = router