const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    response.send("This is home page");
});

const products = [
    {
        id: 1,
        name: "product1"
    },
    {
        id: 2,
        name: "product2"
    }
];
app.get('/products', (request, response)=>{
    response.json(products);
})

//To get a specific product via url
app.get('/products/:id', (request, response)=>{
    const productId = parseInt(request.params.id);
    const findProduct = products.find(p => p.id === productId);
    if(findProduct){
        response.json(findProduct);
    } else{
        response.status(404).send("Product not found");
    }
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running o the port ${port}`);
})