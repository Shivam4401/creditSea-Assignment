import express from "express";
import multer from "multer";
import { uploadXML } from "../controllers/uploadController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("xmlFile"), uploadXML);

export default router;
