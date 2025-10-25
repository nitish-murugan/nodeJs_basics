const mongoose = require('mongoose');
module.exports =  async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/mongoose1");
        console.log("Connection successful");
    } catch(e){
        console.log("Connection failed");
    }
}