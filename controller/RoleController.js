const roleSchema=require('../model/roleSchema')
module.exports.createRole =((req,res) =>{
    var role = new roleSchema(req.body)
    role.save((err,data)=>{
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
})
module.exports.deleteRole =((req,res) =>{
    var id = req.params.id;
    roleSchema.findByIdAndDelete(id,(err,data)=>{
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
})
module.exports.getRoleById = ((req,res)=>{
    var id = req.params.id;
    roleSchema.findById(id,(err,data)=>{
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
module.exports.getAllRoles = ((req,res)=>{
    roleSchema.find((err,data)=>{
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
module.exports.updateRole=((req,res)=>{
    var id = req.params.id
    roleSchema.findByIdAndUpdate(id,(err,data)=>{
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
