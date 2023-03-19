const User=require('../Models/UseModel');
//create new user
const createUser = async(req, res)=>{
    const email = req.body.email;
    const findUser= await User.findOne({email});
        if(!findUser){
            //new user
            const newUser=  await User.create(req.body);
            res.json(newUser);
        }else{
            //user already exist
            res.json({
                msg:"User Already Exist",
                success: false,
            });
        }
};
//delete spesific user
const deleteUser = async (req, res) => {
    const _id = req.params._id;
    const deleteUser = await User.findOneAndDelete({ _id });
    if (deleteUser) {
      res.json({
        msg: 'User deleted successfully',
        success: true,
        user: deleteUser,
      });
    } else {
      res.json({
        msg: 'User not found',
        success: false,
      });
    }
  };
//display all users
const fetchallusers = async (req, res) => {
    const users = await User.find();
    if (users.length > 0) {
      res.json({
        msg: 'Users retrieved successfully',
        success: true,
        users: users,
      });
    } else {
      res.json({
        msg: 'No users found',
        success: false,
      });
    }
  };
//edit spesific user
  const editUser=  async (req, res) => {
    const _id = req.params._id;
    const updatedUser = await User.findOneAndUpdate({ _id }, req.body, { new: true });
    if (updatedUser) {
      res.json({
        msg: 'User updated successfully',
        success: true,
        user: updatedUser,
      });
    } else {
      res.json({
        msg: 'User not found',
        success: false,
      });
    }
  };
  
//display spesific User

const FindUser=async (req, res) => {
    const _id = req.params._id;
    const user = await User.findOne({ _id });
    if (user) {
      res.json({
        success: true,
        user,
      });
    } else {
      res.json({
        msg: 'User not found',
        success: false,
      });
    }
  };


module.exports = {createUser,deleteUser,fetchallusers,editUser,FindUser};