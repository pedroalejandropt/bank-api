import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from './middleware/error';
import apiRouter from './routes';

const createServer = (dependencies: any) => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(helmet())
    app.use(cors({
      origin: '*',
      allowedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    }))

    app.use('/api', apiRouter(dependencies));
    
    app.use(errorHandler);

    const listen = (port: string | number, callback: (() => void)) => {
        app.listen(port, callback);
    }

    return { app, listen };
}

export default createServer;