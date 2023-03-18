const express=require('express');
const dbConnect = require('./config/database');
const app= express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter=require('./routes/authRouter');

dbConnect();
// app.use('/', (req,res)=>{
//     res.send("Hello from the server side");
// });


app.use('/api/user',authRouter);
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});