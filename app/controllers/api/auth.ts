import type { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
    console.log("OK!");
    res.end("")
}
export const forgotPassword = async (req: Request, res: Response) => {
    res.json({})
}