import express, {Request, Response, Router} from "express";

const router:Router = express.Router();
const version:Number = 5;

router.get('/', (req: Request, res: Response) => {
    res.send(`<h1>This is version ${version}</h1><br/>`);
});

export default router;