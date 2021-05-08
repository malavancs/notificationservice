import express from 'express';
import Route from './interface/route';
import { connectToDatabase } from './database/database';
class App {
    public app: express.Application;
    public port: string | number;
    public env: string;

    constructor(routes: Route[]) {
        this.app = express();
        this.port = process.env.PORT || 2000;
        this.env = process.env.NODE_ENV || 'development';
        this.initializeRoutes(routes);
        connectToDatabase();

    }
    private initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    } public listen() {
        this.app.listen(this.port, () => {
            console.log("App running. Listening to port", this.port);
        });
    }

}

export default App;