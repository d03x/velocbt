import multer from "multer"
import storage from "@/config/storage"
export const upload = () => {
    return multer({ storage: storage.storageUpload() });
}
export const uploadAvatar = () => {
    return multer({ storage: storage.avatarUpload(), limits: { fileSize: 1024 * 1024 * 5 } });
}