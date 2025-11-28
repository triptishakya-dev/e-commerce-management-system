import express from "express";
import { postorder } from "../controllers/orderController.js";



const router = express.Router();

router.post("/api/order" , postorder );


export default router;


