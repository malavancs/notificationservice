import { model, Schema, Document } from 'mongoose';
import { NotificationSchedule } from './notificationschedule.interface';


const notificationSchedule = new Schema({
    scheduleTime: {
        type: String,
        default: null
    },
    message:{
        type: Schema.Types.Mixed,
        default: null
    },
    status: {
        type: String,
        default: null
    },
    medium: {
        type: String,
    }
});


const notificationScheduleModel = model<NotificationSchedule & Document>('NotificationSchedule',notificationSchedule);
export default notificationScheduleModel;