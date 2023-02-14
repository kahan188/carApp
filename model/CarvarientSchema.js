const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const carvarientSchema = new Schema({
   
    variantName:{
        type: String
    }
})
module.exports = mongoose.model('carvarient',carvarientSchema);