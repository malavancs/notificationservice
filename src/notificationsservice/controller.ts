import CreateScheduleDto from "dto/CreateScheduleDto";
import { NextFunction, Request,Response } from "express";
import NotificationService from "./services";

class NotificationController {
    public notificationSerice = new NotificationService();
    public createSchedule = async(request: Request,response: Response,next: NextFunction) => {
        try{
            const body: CreateScheduleDto = request.body;
            console.log(body);
            const result = await this.notificationSerice.createSchedule(body);
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