import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register Controller
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


//login controller
export const loginUser=async(req,res)=>{

    try{
    const{email,password}=req.body
    
    if(!email || !password){

        return res.status(400).json({message:'Please fill all the fields'});
    }

    const userExists= await User.findOne({email});
    if(!userExists){
        return res.status(400).json({message:'User does not exist'});
    }

    const isPasswordValid= await bcrypt.compare(password,userExists.password);

    if(!isPasswordValid){
        return res.status(400).json({message:'Invalid credentials'});
    }

    const token= jwt.sign({userId:userExists._id},process.env.JWT_SECRET,{expiresIn:'1h'});

    res.status(200).json({
        message:'Login successful',
        token,
        user:{
            id:userExists._id,
            name:userExists.name,
            email:userExists.email
        }
    });
}catch(err)
{
    res.status(500).json({message:'Server Error'});
}
}