import multer from "multer";
import path from "path";
import { __dirname } from "@/dirname";
import { randomUUID } from "crypto";
import { existsSync, mkdirSync } from "fs";
import { STORAGE_PATH } from "@/constants/storagePath";

const uniqueSurfix = `${Date.now()}${Math.round(Math.random() * 1E9)}`

if (!existsSync(STORAGE_PATH)) {
    mkdirSync(STORAGE_PATH);
}
export function generateFilename(filename: string, originalFile: boolean) {
    if (originalFile) {
        return filename.split('.').slice(0, -1).join('.') || filename;

    }
    return randomUUID().split('-').join('') || filename;
}

export function getExtension(filename: string) {
    return path.extname(filename);
}

export const commonUploadDiskStorage = (path: string) => {

    if (!existsSync(path)) {
        mkdirSync(path);
    }
    return multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path)
        },
        filename(req, file, callback) {
            callback(null, `${generateFilename(file.originalname, false)}${uniqueSurfix}${getExtension(file.originalname)}`);
        },
    })
}
export default {
    storageUpload: () => commonUploadDiskStorage(STORAGE_PATH),
    avatarUpload: () => commonUploadDiskStorage(path.join(STORAGE_PATH, "avatar")),
}