const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

export const registerUser=async(req, res)=>{

    try{
    const {name,email,password}= req.body;

    if(!name || !email || !password){

        return res.status(400).json({messsage:'Please fill all the fields'});
    }

    const userExits=await User.findOne({email});

    if(userExits){ return res.status(400).json({message:'User already exists'});}

    const hashPassword= await bcrypt.hash(password,10);

    const user= await User.create({

        name,
        email,
        password:hashPassword
    });

    res.status(201).json({
    message:'User registered successfully',
    userId:user._id
});
}catch(err){
    res.status(500).json({message:'Server Error'});
}
}