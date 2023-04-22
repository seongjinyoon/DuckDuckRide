// Create React App
const express = require("express")
const app = express()

/**
 * Routers:
 * This is an api backend so every routes have api at first then with its session (functions)
 *      EX: api/login is handled by index.js
 *      get,post,put,delete actions are handled by Routers
 */
const UserRouter = require("./routes/UserRouter")
const RideRouter = require("./routes/RideRouter")

/**
 * Setups:
 *      1. read json files
 */
app.use(express.json())


app.use("/api/login", UserRouter)
app.use("/api/ride", RideRouter)

app.get("/",(req,res)=>{
    res.send(`
        <h1>Hello ${req.ip}<h1>
        <div style="background-color:pink;">Welcome to Home Page</div>
    `)
})


app.listen(20627,()=>{
    console.log("Server started")
    console.log("http://127.0.0.1:20627/")
})


