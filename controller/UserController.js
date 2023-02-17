const userSchema= require("../model/userSchema")
const {hashPassword} = require('../util/Encrypt')
const { model } = require('mongoose');
const { json } = require('express');
module.exports.createUser =(req,res) =>{
    console.log(req.body.password)
   // var hashedPassword = await hashPassword(req.body.password)

    var userData = {  
        role:req.body.role,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
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
    userSchema.findById(id,(err,data)=>{
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
module.exports.getAllUsers = (req,res)=>{

    userSchema.find().populate('role').exec((err,data)=>{

        if(err){
            res.status(500).json({
                message: "Some error occurred while retrieving students.",
                error: err.message
            })
        }
        else{
            res.status(200).json({
                message: "Students retrieved successfully",
                data: data
            })
        }

    })


}
module.exports.updateUser=((req,res)=>{
    var id = req.params.id
    userSchema.findByIdAndUpdate(id,(err,data)=>{
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

}