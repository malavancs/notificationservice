import { model, Schema, Document } from 'mongoose';
import { User } from './users.interface';

const communicationDetails: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  other: {
    type: Schema.Types.Mixed,
    default: null
  }
});


const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isSubscribed: {
    type: String,
    required: true,
    default: false
  },
  communicationDetails: {
    type: communicationDetails
  }
}, { versionKey: false });

const userModel = model<User & Document>('User', userSchema);

export default userModel;
