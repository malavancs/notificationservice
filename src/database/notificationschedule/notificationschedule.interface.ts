export interface NotificationSchedule {
    _id: any;
    message: any;
    scheduleTime: string;
    status: string | 'scheduled' | 'inprogress' | 'completed';
    medium: string;
}