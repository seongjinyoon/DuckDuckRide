const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserType = {
    username: String,
    password: String,
    age: Number,
    
}

const UserModel = mongoose.model("user",new Schema(UserType))

module.exports = UserModel