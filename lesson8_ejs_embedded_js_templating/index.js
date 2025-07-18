const express = require('express');
const path = require('path');
const app = express();
const products = [
    {id:1, name:'product1'},
    {id:2, name:'product2'},
    {id:3, name:'product3'}
]
const port = 3000;

//Set ejs templating engine
app.set('view engine', 'ejs');
//Set view path
app.set('views', path.join(__dirname,'views'));

app.get('/',(request, response)=>{
    response.render('home',{title:'Home page',products:products});
})
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})