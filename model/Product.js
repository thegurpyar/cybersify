import mongoose from "mongoose";

const product = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }
})

const productModel = mongoose.model("Product",product);
export {productModel}