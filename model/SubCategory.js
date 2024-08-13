import mongoose from "mongoose";

const subCategory = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
})

const subCategoryModel = mongoose.model("SubCategory",subCategory);
export {subCategoryModel}