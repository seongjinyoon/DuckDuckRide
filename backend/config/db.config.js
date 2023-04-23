//链接数据库
const mongoose = require("mongoose")

//固定的是mongodb然后后面的sandwich_db是数据库名字
mongoose.connect("mongodb://127.0.0.1:27017/DuckDuckRide")