import express from 'express';
import apiBase from './base';

const apiV1 = (dependencies: any) => {
    const routes = express.Router();
    routes.use('/base', apiBase(dependencies));
    return routes;
};

export default apiV1;