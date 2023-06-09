const express=require('express');
const dbConnect = require('./config/database');
const app= express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser=require("body-parser");
const authRouter=require('./routes/authRouter');
const { errorHandlee } = require('./middlewares/errorhandles');

dbConnect();
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));

// app.use('/', (req,res)=>{
//     res.send("Hello from the server side");
// });

//Error Handeling

app.use(notFound);
app.request(errorHandlee);
app.use('/api/user',authRouter);
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});