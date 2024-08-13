import { productModel } from "../model/Product.js";
import { categoryModel } from "../model/Category.js";
import { subCategoryModel } from "../model/SubCategory.js";

const addProductService = async (product, id, category, subCategory) => {
  try {
    const newSubCategory = await subCategoryModel.create({
      name: subCategory,
    });
    
    const newCategory = await categoryModel.create({
      name: category,
      subCategory: newSubCategory._id,
    });

    const newProduct = await productModel.create({
      product: product,
      id: id,
      category: newCategory._id,
    });

    return newProduct;
  } catch (error) {
    console.error("Error in addProductService:", error);
    throw error;
  }
};

const getProductService = async (id) => {
  try {
    const data = await productModel.findOne({ id: id }).populate({
      path: "category",
      populate: {
        path: "subCategory",
      },
    });

    if (!data) {
      throw new Error("Product not found");
    }


    return data;
  } catch (error) {
    console.error("Error in getProductService:", error);
    throw error;
  }
};

export{addProductService,getProductService}
