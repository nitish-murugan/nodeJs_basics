const express = require('express');
const app = express();

const fn1 = (request, response, next)=>{
    console.log(`${new Date().toISOString()} from ${request.method} to ${request.url}`);
    //response.send("Invalid request");
    next();
}

app.use(fn1);
app.get('/', (request, response)=>{
    response.send("Home page");
});
app.get('/about', (request, response)=>{
    response.send("About page");
});
app.listen(3000, ()=>{
    console.log("Server is running on the port 3000");
});