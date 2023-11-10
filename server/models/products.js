const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://vaishnavishinde0003:Lee%400003@cluster0.z98wdgi.mongodb.net/CFM')
.then(()=>{
    console.log("mongoose connected")
}).catch((e)=>{
    console.log("can't connect to mongoose", e);
})

const prod = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    hash:{
        type:Array,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const products = new mongoose.model('products', prod);

module.exports=products;