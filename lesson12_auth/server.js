require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbCode');
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/homeRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRouter);

connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is listening in port ${PORT}`);
})