const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    response.send("Hello world");
})
app.listen(3000, ()=>{
    console.log("Server is running on the port 3000");
})