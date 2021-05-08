
import { model, Schema, Document } from 'mongoose';
import { CommunicationAudit } from './communicationaudit.interface';


const communicationAudit: Schema = new Schema({
    message : {
        type: String,
        required: true
    },
    sentTo: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true
    },
    retryCount: {
        type: Number,
        default: 0,
        required: false
    },
    sentAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: 'User'
    }
});


const userModel = model<CommunicationAudit & Document>('CommunicationAudit', communicationAudit,);

export default userModel;