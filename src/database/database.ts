import * as Mongoose from 'mongoose';
import { connect, set } from 'mongoose';
let database: Mongoose.Connection;

export function connectToDatabase() {
  if (this.env !== 'production') {
    set('debug', true);
  }
  connect(process.env.mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}