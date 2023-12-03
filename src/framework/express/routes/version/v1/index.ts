import express from 'express';
import apiBase from './base';
import apiClient from './client';

const apiV1 = (dependencies: any) => {
    const routes = express.Router();
    routes.use('/base', apiBase(dependencies));
    routes.use('/client', apiClient(dependencies));
    return routes;
};

export default apiV1;