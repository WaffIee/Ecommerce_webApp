const User=require('../Models/UseModel');

const createUser = async(req, res)=>{
    const email = req.body.email;
    const findUser= await User.findOne({email});
        if(!findUser){
            //new user
            const newUser=  User.create(req.body);
            res.json(newUser);
        }else{
            //user already exist
            res.json({
                msg:"User Already Exist",
                success: false,
            });
        }
};

module.exports = {createUser};