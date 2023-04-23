// Construct Router
const express = require("express")
const router = express.Router()
const RideModel = require("../models/RideModel")
const geolib = require("geolib")


// Controller
const RideController = require("../controllers/RideController")

router.get("/",async (req,res)=>{
    console.log(req.query)
    // Show Ride Distances base on given query
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


    // Show nearest ride base on start and end position
    else if(req.query.findstart==="true"){
        let data = await RideModel.find()
        let dataList = []
        let {stLat,stLon,enLat,enLon,near} = req.query
        let usrStart = {
            latitude: parseFloat(stLat),
            longitude: parseFloat(stLon)
        }
        let usrEnd = {
            latitude: parseFloat(enLat),
            longitude: parseFloat(enLon)
        }

        for(let i=0; i<data.length; i++){
            let start = {
                latitude: parseFloat(data[i].stLat[0]),
                longitude: parseFloat(data[i].stLon[0])
            }
            let end = {
                latitude: parseFloat(data[i].enLat[0]),
                longitude: parseFloat(data[i].enLon[0])
            }
            startDis = 0.000621371 * geolib.getDistance(start,usrStart)
            endDis = 0.000621371 * geolib.getDistance(end,usrEnd)
            console.log(startDis, endDis)
            if(startDis < parseFloat(near) && endDis < parseFloat(near)){
                dataList.push(data[i])
            }
        }
        console.log(dataList)
        res.send(dataList)
    }

    // Return all data
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

router.put("/",(req,res)=>{
    console.log(req.body)
    let {id,passengerId,stLat,stLon,enLat,enLon} = req.body
    RideModel.updateOne({_id:id},{
        $push:{
            passengersId:passengerId,
            stLat:stLat,
            stLon:stLon,
            enLat:enLat,
            enLon:enLon,
        }
    }).then(()=>{
        console.log("put finished")
        res.send({ok:1})
    } )
    
})

module.exports = router