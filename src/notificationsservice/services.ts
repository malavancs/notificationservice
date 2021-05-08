import CreateScheduleDto from "../dto/CreateScheduleDto";
import notificationScheduleModel from "../database/notificationschedule/notificationschedule.model";

class NotificationService {
    public notificationModel = notificationScheduleModel;
    public async createSchedule(data: CreateScheduleDto) {
        console.log(data);
        const result = await this.notificationModel.create(data);
        return result;
    }
}

export default NotificationService;