require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoutes');
const bookRouter = require('./routes/bookRoutes');
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/products', productRouter);
app.use('/books', bookRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("MongoDB successfully connected")})
.catch((e)=>{console.log(`Error in connecting mongoDB ${e}`)})

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
})