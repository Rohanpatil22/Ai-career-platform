import User from '../models/User.js';


export const getUserProfile= async (req,res) => {

try{

    const user=await User.findById(req.user._id).select('-password');
console.log(user)
    if(!user)
    {
        return res.status(404).json({message:"User not found"});
    }

    res.status(200).json({
        id:user._id,
        name:user.name,
        email:user.email   
    })

}catch(err){

    res.status(500).json({message:'Server Error'});

}
}