import { ILocation } from './location.interface';

export interface ITrip {
  id: number;
  name: string;
  description: string;
  image: File | null;
  startDate?: Date;
  endDate?: Date;
  locations: ILocation[];
}
