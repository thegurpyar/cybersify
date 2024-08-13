import mongoose from "mongoose";

const category = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubCategory",
    }
})

const categoryModel = mongoose.model("Category",category);
export {categoryModel}