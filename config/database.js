const { default: mongoose } = require("mongoose")

const dbConnect = () =>{

    try{
    const conn=mongoose.connect(process.env.MONGODB_URl);
    console.log("Database  connected Seccefully");
    
    }catch(error){
            console.log("Database Not connected Seccefully");
    }
    
};
module.exports = dbConnect;