
import BaseMedium from "./communicationmediums/basemedium";
import Email from "./communicationmediums/email";
import notificationScheduleModel from "../../database/notificationschedule/notificationschedule.model";
import { NotificationSchedule } from "../../database/notificationschedule/notificationschedule.interface";
import userModel from "../../database/users/users.model";
import { User } from "../../database/users/users.interface";
import Whatsapp from "./communicationmediums/whatsapp";

class Scheduler {

    public users = userModel;
    public communicationMedium = null;
    public async run() {
        const schedule: NotificationSchedule[] = await notificationScheduleModel.find(
            {
                // status: 'scheduled',
                // scheduleTime: new Date()
            }
        );
        console.log(`Found ${schedule.length} notification scheduled`);
        schedule.forEach(async (schedule: NotificationSchedule) => {
            await notificationScheduleModel.updateOne({ _id: schedule._id }, { status: 'inprogress' });
            await this.processSchedule(schedule);
            await notificationScheduleModel.updateOne({ _id: schedule._id }, { status: 'completed' });
            
        });
        
    }

    private async processSchedule(schedule: NotificationSchedule) {

        const communicationMedium = this.getCommunicationMedium(schedule.medium);
        const subscribedUsers: User[] = await this.users.find({ isSubscribed: true });
        console.log('Info:', `Sending notification to ${subscribedUsers.length} users`);

        await Promise.all(subscribedUsers.map(async (user:User)=> {
            try {
                await communicationMedium.sendMessage(user.communicationDetails, schedule.message);
                console.log(`Successfully sent to ${user.communicationDetails}`);
            } catch (e) {
                console.log("Retry failed", e);
            }
        }));

    }


    private getCommunicationMedium(medium: string) {
        console.log();
        switch (medium) {
            case 'email': return new Email({ email: process.env.email, password: process.env.emailpassword });
            case 'whatsapp': return new Whatsapp({ apiKey: 'aefui-assem-pifhs-aksls' });
            default: return new Email({ email: 'malavanhari3@gmail.com', password: 'mlvnROD@2020' });
        }
    }
}

export default Scheduler;