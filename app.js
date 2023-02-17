const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require('./routes/userRoutes')
const roleRoutes = require('./routes/roleRoutes')

 
app.use('/User',userRoutes)
app.use('/Role',roleRoutes)

 const PORT = 3000
mongoose.connect('mongodb://127.0.0.1:27017/car', 
{useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log('DB CONNECTED');
}).catch((err)=>{
    console.log(err);
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})