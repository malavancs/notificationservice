import * as express from "express";
import * as Mongoose from "mongoose";

import App from "./app";
import NotificationRoutes from "./notificationsservice/routes";
import { NotificationSchedule } from "./database/notificationschedule/notificationschedule.interface";
import notificationScheduleModel from "./database/notificationschedule/notificationschedule.model";
import Scheduler from "./notificationsservice/scheduler/scheduler";
import cron from 'node-cron';
require('dotenv').config()
const app = new App([new NotificationRoutes()]);
app.listen();

cron.schedule('* * * * *', async () => {
      console.log("*****Running cron***** @",new Date().toISOString());
      const scheduler = new Scheduler();
      await scheduler.run();
      console.log("***** Cron done ****** @",new Date().toISOString());
});

