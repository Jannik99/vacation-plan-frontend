import { Injectable } from '@angular/core';
import { ITrip } from '../models/trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripPlannerService {
  currentPlannedTrip: ITrip = {
    id: 0,
    name: '',
    description: '',
    image: '',
    locations: [],
  };

  constructor() {}

  setCurrentPlannedTrip(trip: ITrip) {
    this.currentPlannedTrip = trip;
  }
}
