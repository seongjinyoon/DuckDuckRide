const express = require("express")
const RideService = require("../services/RideService")

const RideController = {
    getRide:(req,res)=>{
        console.log(`    RideController::getRide query:`)

        if(req.query.driverId != null){
            //do something here
            console.log(`        driverId: ${eq.query.driverId}`)
        }
        if(req.query.driverName != null){
            console.log(`        driverName: idk`)
        }
        res.send(data)
    }
}


module.exports = RideController