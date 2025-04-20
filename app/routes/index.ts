import { uploadAvatar } from "@/common/filesystem";
import { fileUploadValidation } from "@/validations/file-upload-validation";
import { auth } from "@/controllers";
import express from "express";

//routes
const routes = express.Router();
routes.get("/login", auth.login)
routes.get('/forgot-pw', auth.forgotPassword)
export default routes;