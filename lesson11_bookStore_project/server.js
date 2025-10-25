require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./database/dbCode');
const router = require('./routes/router');

app.use(express.json());
app.use("/api/books", router);

connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`);
});