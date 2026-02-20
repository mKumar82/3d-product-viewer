import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadModel } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/", upload.single("model"), uploadModel);

export default router;
