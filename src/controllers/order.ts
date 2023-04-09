import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";





const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO VE LAS PERSONAS CON SESSION  /JWT",
            user:req.user,
        })
    } catch (error) {
        handleHttp(res, "Error_Get_Blogs");
    }
};

export { getItems }