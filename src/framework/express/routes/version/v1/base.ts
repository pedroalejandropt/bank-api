import express from "express";
import BaseController from "../../../../../controller/BaseController";

const apiBase = (dependencies: any) => {
    const routes = express.Router();
    const { baseRepository } = dependencies;
    const baseController = new BaseController(baseRepository);
    
    routes.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await baseController.get(req, res);
    });

    return routes;
}

export default apiBase;

