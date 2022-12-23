import { ILocation } from '../components/location-search/LocationSearch';

export interface IEvent {
  id: string;
  name: string;
  location: ILocation;
  description: string;
  image: string;
  sports: string[];
  startTime: Date;
  endTime: Date;
}
