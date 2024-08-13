import express from "express";
import cors from "cors"
import productRoutes from './routes/productRoutes.js';
import mongoose from "mongoose";
const app = express()
mongoose.connect("mongodb://localhost:27017/test")
.then(() => {
    console.log("DB connected");
})
.catch(err => {
    console.error("DB connection error:", err);
});

app.use(express.json())
app.use(cors());
app.use("/product",productRoutes);

app.listen(3000,()=>{
    console.log("server is up and running")
})

