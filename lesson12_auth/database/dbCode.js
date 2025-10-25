require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{console.log("MongoDB Connected");});
    } catch(e){
        console.log("Error in connecting DB");
        process.exit(1);
    }
}