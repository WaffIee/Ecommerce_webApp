const express = require('express');
const {createUser, FindUser , deleteUser, fetchallusers,editUser} =require("../Controller/UserController");


const router=express.Router();



router.post('/register',createUser);
router.get('/users',fetchallusers);
router.get('/finduser/:_id',FindUser);
router.delete('/delete/:_id',deleteUser);
router.put('/edit/:_id',editUser);


module.exports=router;