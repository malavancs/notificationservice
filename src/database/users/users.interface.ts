export interface CommunicationDetails {
  email: string;
  mobileNumber: string;
  other: any;
}
export interface User {
  _id: string;
  name: string;
  isSubscribed: boolean;
  communicationDetails: CommunicationDetails;
}
