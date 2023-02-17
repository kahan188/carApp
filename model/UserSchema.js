const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    role:[{
        type:Schema.Types.ObjectId,
        ref:'role'
        
    }],
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    }
})
module.exports = mongoose.model('user',userSchema);