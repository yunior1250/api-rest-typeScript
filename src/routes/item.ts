import { Router, Response, Request } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();
/**
 * http://localhost:3002/ [GET]
 */

/* router.get("/", (req: Request, res: Response) => {
    res.send({ data: "Aqui_no_va_los_modelos" })
}); */

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);







export { router }
