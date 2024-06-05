const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors')
require('dotenv').config();


const products=require("./routes/product")
const orders=require("./routes/order")
app.use(express.json())
app.use(cors())

app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT,()=>{
    console.log('Localhost Connected Succesfully')
})
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('MONGO_DB Connected Succesfully!!');
}).catch((err)=>{
    console.log(err.message);
})