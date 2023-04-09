import { NextFunction, Request, Response } from "express"



const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // console.log('hola soy el log')
    // res.send("Desde el middleware")
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log('user-agent: ' ,userAgent);
    next();


}

export { logMiddleware }