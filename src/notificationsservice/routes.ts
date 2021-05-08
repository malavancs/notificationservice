import Route from "../interface/route";
import { Router } from "express";
import NotificationController from "./controller";

import CreateScheduleDto from "../dto/CreateScheduleDto";
import validationMiddleware from "../middleware/validation.middleware";
class NotificationRoutes implements Route {
    public path = '/notifications';
    public router = Router();
    public notificationController = new NotificationController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('',validationMiddleware(CreateScheduleDto,true,'body'),this.notificationController.createSchedule);
    }


}

export default NotificationRoutes;


