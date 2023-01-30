import { ILocation } from '../../components/location-search/LocationSearch';
import { IUser } from './user.types';

export interface IEvent {
  id: string;
  name: string;
  location: ILocation;
  description: string;
  image: string;
  sports: string[];
  startTime: Date;
  endTime: Date;
  participants?: IUser[];
  eventRequests: IEventRequest[];
}

export interface IEventRequest {
  id: string;
  eventId: string;
  userId: string;
  isApproved: string;
  requestFrom: IUser;
  requestFor: IUser[];
}
