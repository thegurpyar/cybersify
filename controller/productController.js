import asyncHandler from "express-async-handler";
import { getProductService,addProductService } from "../services/productServices.js";

const addProductController = asyncHandler(async (req, res) => {
  const { product, id, category, subCategory } = req.body;
  if (!product || !id || !category || !subCategory) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const data = await addProductService(product,id,category,subCategory);
  return res.status(201).json({message:"product created successfully",data:data})


});

const getProductController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Missing product id" });
  }

  const data = await getProductService(id);
  return res.status(201).json({message:"product data sent successfully",data})
});

export { addProductController, getProductController };

