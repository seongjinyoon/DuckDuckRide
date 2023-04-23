const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RideType = {
    driverId: mongoose.Types.ObjectId,
    passengersId: [String],
    stLat: [],
    stLon: [],
    enLat: [],
    enLon: [],
    date: Date
}

const RideModel = mongoose.model("ride",new Schema(RideType))

module.exports = RideModel