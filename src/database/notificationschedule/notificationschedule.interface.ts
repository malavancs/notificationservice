export interface NotificationSchedule {
    _id:any;
    message: any;
    scheduleTime: Date;
    status: string | 'scheduled' | 'inprogress' | 'completed';
    medium: string;
}