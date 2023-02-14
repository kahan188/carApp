const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const CarcategoriesSchema = new Schema({

    carType:{
        type: String,
    }
})
module.exports = mongoose.model('carcategories',carcategoriesSchema);