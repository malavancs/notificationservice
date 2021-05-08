import notificationScheduleModel from "../database/notificationschedule/notificationschedule.model";

class NotificationService {
    public notificationModel = notificationScheduleModel;
    public async createSchedule(time: string, message) {
        const result =   await this.notificationModel.find();
        return result;
    }
}

export default NotificationService;