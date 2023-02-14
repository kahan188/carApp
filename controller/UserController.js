const userSchema= require("../model/userSchema")
const {encrypt} = require('../util/Encrypt')
const { model } = require('mongoose');
const { json } = require('express');
module.exports.createUser =async(req,res) =>{
    console.log(req.body.password)
    const hashedPassword = await encrypt.hashPassword(req.body.password)

    var userData = {  
        role:req.body.role,
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        age:req.body.age
    }
    var user = new userSchema(userData)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error"
            })
        }else{
            res.status(201).json({
                message:"success",
                data:data
            })
            
        }

    })
}
module.exports.deleteUser =(req,res) =>{
    var id = req.params.id;
    userSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data==null){
                res.status(404).json({
                    message:"not found",
                })
            }
            else{
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
        }

    })
}
module.exports.getUserById = ((req,res)=>{
    var id = req.params.id;
    userSchema.findById(id,(req,res)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{f
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })

})
module.exports.getAllUsers = ((req,res)=>{
   userSchema.find.populate('role').exce((err,data)=>{
        if(err)
        {
            res.send("errror");
        }
        else
        {
            res.send(data);
        }

   })
        
    
})
module.exports.updateUser=((req,res)=>{
    var id = req.params.id
    userSchema.findByIdAndUpdate(id,(req,res)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })
})
exports.loginUser = async(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    userSchema.findOne({email:email},(err,data)=>{
        if(err){
              res.status(500).json({
                message:"error",
              })  

        }
        else{
            if(data){
                comparePassword(password,data.password).then((result)=>{

                        if(result){
                            res.status(200).json({
                                message:"success",
                                data:data
                            })
                        }
                        else{
                            res.status(401).json({
                                message:"unauthorized",
                            })
                        }
                })
            }
            else{
                res.status(404).json({
                    message:"not found",
                })
            }
        }
    })

}