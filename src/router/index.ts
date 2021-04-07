import express, {Request, Response, Router} from "express";

const router:Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello Express with Typescript!</h1>');
});

export default router;