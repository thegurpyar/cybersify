import express from "express";
import { addProductController,getProductController } from "../controller/productController.js";

const router = express.Router();

router.get("/:id", getProductController);
router.post("/", addProductController);

export default router;
