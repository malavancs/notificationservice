import express from 'express';
import Route from './interface/route';
import { connectToDatabase } from './database/database';
import errorMiddleware from './middleware/error.middleware';
import 'reflect-metadata';
class App {
    public app: express.Application;
    public port: string | number;
    public env: string;

    constructor(routes: Route[]) {
        this.app = express();
        this.port = process.env.PORT || 2000;
        this.env = process.env.NODE_ENV || 'development';
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        connectToDatabase();

    }
    private initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log("App running. Listening to port", this.port);
        });
    }

}

export default App;