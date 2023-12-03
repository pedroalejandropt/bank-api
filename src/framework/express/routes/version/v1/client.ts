import express from "express";
import ClientController from "../../../../../controller/ClientController";

const apiClient = (dependencies: any) => {
    const routes = express.Router();
    const { clientRepository } = dependencies;
    const clientController = new ClientController(clientRepository)

    routes.get('/view', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await clientController.get(req, res);
    });

    routes.post('/deposit', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await clientController.deposit(req, res);
    });

    routes.post('/withdraw', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await clientController.withdraw(req, res);
    });

    routes.post('/change-pin', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await clientController.changePin(req, res);
    });

    return routes;
}

export default apiClient;

