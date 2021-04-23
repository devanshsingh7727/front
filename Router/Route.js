const express=require('express');
const User = require('../model/userSchema');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send('hello to new backend')
})
route.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword){
        res.json({error:'please fill all'})
    }
    try{
        const userExits=await User.findOne({email:email})
        if(userExits){
            res.json({message:"user already exists"})
        }
        else if(password !=cpassword){
            res.json({message:"password do not match already exists"});

        }
        else{ 
            const UserData=new User({name,email,phone,work,password,cpassword})
            const data=await UserData.save()
            if(data){
                res.json({mess:'data saved'})
            }
            else{
                res.json({mes:'data dont save'})
            }
        }
    }
    catch(err){
        console.log('error');
    }

})
module.exports=route 