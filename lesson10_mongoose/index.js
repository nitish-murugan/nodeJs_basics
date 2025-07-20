const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose1').then(()=>{console.log("Connection success");}).catch((e)=>{console.log("Error in connection")});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    tags: [String],
    createdAt: {type: Date, default: Date.now}
});
const User = mongoose.model("User",userSchema);

async function runQueries(){
    try{
        // Add records to the collection
        /*const newUser = await User.create({
            name: "Nitish",
            email: "nitish@gmail.com",
            tags: ["Developer", "Backend"]
        });
        console.log(newUser);*/
        
        // Select only the specific fields
        /*const specificFields = await User.find({}).select('name email age -_id');
        console.log(specificFields);*/

        const allUsers = await User.countDocuments({});
        console.log(allUsers);

    }catch(e){
        console.log("Error");
    }finally{
        mongoose.connection.close();
    }
}

runQueries();