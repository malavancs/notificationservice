import Route from "../interface/route";
import { Router } from "express";
import NotificationController from "./controller";
class NotificationRoutes implements Route {
    public path = '/notifications';
    public router = Router();
    public notificationController = new NotificationController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('', this.notificationController.createSchedule);
    }


}

export default NotificationRoutes;