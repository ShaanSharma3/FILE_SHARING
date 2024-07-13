
import express from "express";
import { uploadImage , getImage } from "../controller/img_controller.js";
import upload from "../upload.js";
const router = express.Router();

router.post('/upload' ,upload.single('file'), uploadImage);
router.get('/file/:fileId',getImage);
export default router;
