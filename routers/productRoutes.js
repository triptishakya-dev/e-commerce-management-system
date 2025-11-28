import express from "express";
import { addproduct } from "../controllers/productController.js";


const router = express.Router();

router.post("/api/product" , addproduct);

export default router;