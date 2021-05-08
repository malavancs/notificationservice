
export interface CommunicationAudit {
    message: string;
    sentTo: string;
    medium: string;
    retryCount: string;
    sentAt: Date;
    userId: string;
}
