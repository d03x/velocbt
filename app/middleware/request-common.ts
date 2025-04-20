import type { NextFunction, Request, Response } from "express";

export default function globalMiddleware() {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    }
}