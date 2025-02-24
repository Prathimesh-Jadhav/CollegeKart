const userModel = require('../models/userModel');

const register = async (req, res) => {
    const {name,email,password,userType,subType} = req.body;
    try {
        const user = await userModel.create({name,email,password,userType,subType});
        //create token
        const token = generateAndValidateToken(user);
        if(!token){
            return res.status(500).json({message:"Token Generation Failed",success:false});
        }
        res.cookies(token).status(200).json({message:"User Registered Successfully",data:user,success:true,token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"registration failed",success:false});
    }
}

const login = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email,password});
        if(user){
            //create token
            const token = generateAndValidateToken(user);
            if(!token){
                return res.status(500).json({message:"Token Generation Failed",success:false});
            }
            res.cookies(token).status(200).json({message:"User Logged In Successfully",data:user,success:true,token:token});
        }else{
            res.status(200).json({message:"User Not Found",success:false,data:user});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"login failed",success:false});
    }
}

module.exports = {register,login};