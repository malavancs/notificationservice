import { NextFunction, Request,Response } from "express";
import NotificationService from "./services";

class NotificationController {
    public notificationSerice = new NotificationService();
    public createSchedule = async(request: Request,response: Response,next: NextFunction) => {
        try{
            const result = await this.notificationSerice.createSchedule('','');
            return response.send({
                data: result,
                statusCode:200
            });
        }catch(e){
            next(e);
        }
    }
}

export default NotificationController;