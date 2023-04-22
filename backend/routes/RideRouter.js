// Construct Router
const express = require("express")
const router = express.Router()

// Controller
const RideController = require("../controllers/RideController")

router.get("/",RideController.getRide(req,res))

module.exports = router