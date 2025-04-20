import type { NextFunction, Request, Response } from "express"
import { fileTypeFromBuffer } from "file-type";
import { readFileSync, unlinkSync } from "fs";

export const fileUploadValidation = (extenstionsAllowed: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const file = req.file?.path as string;
            const buffer = readFileSync(file);
            const type = await fileTypeFromBuffer(buffer) as any;
            if (!type || !extenstionsAllowed.includes(type.ext)) {
                unlinkSync(file)
                res.status(402).json({
                    code: 402,
                    status: false,
                    message: "File extension not allowed: " + extenstionsAllowed.join(",")
                })
                return next(new Error("Invalid file type"));
            }
            return next();

        } catch (error) {
            res.status(505).end("Internal Server error");
            return next(new Error("Internal server error"))
        }

    }
}