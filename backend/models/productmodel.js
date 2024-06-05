const mongoose=require('mongoose')

const productschema=mongoose.Schema({
    name:String,
    title:String,
    price:String,
    description:String,
    image:String,
    rating:[
        {
            rate:String,
            count:String,
        }
    ],
    category:String,
});

const productModel=mongoose.model('product',productschema);
module.exports=productModel;