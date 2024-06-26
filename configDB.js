const mongoose = require('mongoose')

const connectDB =  () =>{
    mongoose.connect("mongodb://localhost:27017/",{ 
    dbName: "DB", 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  },).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})
}

module.exports = connectDB;