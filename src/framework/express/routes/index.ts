import express from 'express';
import apiV1 from './version/v1';

const apiRouter = (dependencies: any) => {
    const routes = express.Router();
    routes.use('/v1', apiV1(dependencies));
    return routes;
};

export default apiRouter;