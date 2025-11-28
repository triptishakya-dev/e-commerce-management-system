import express from "express";
import { postaddress } from "../controllers/addressController.js";

const router = express.Router();

router.post("/api/address", postaddress);


export  default router;