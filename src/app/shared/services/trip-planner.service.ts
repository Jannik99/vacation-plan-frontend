import { Injectable } from '@angular/core';
import { ILocation } from '../models/location.interface';
import { ITrip } from '../models/trip.interface';
import { Utilities } from '../utilities';

@Injectable({
  providedIn: 'root',
})
export class TripPlannerService {
  sampleLocation: ILocation = {
    id: '1',
    name: 'Sample Location',
    description: 'Sample description',
    latitude: 0,
    longitude: 0,
  };

  currentPlannedTrip: ITrip = {
    id: 0,
    name: '',
    description: '',
    locations: [this.sampleLocation],
    image: null,
  };
  trips: ITrip[] = [];

  constructor() {
    this.loadTrips();
  }

  setCurrentPlannedTrip(trip: ITrip) {
    this.currentPlannedTrip = trip;
  }

  addLocationToCurrent(location: ILocation = { ...this.sampleLocation }) {
    location.id = new Utilities().generateUUID();
    this.currentPlannedTrip.locations.push(location);
  }

  getLocationIndex(locationId: string) {
    return this.currentPlannedTrip.locations.findIndex(
      (location) => location.id === locationId
    );
  }

  removeLocationFromCurrent(locationIndex: number) {
    this.currentPlannedTrip.locations.splice(locationIndex, 1);
  }

  removeTrip(trip: ITrip) {
    const index = this.trips.findIndex((t) => t.id === trip.id);
    this.trips.splice(index, 1);
    this.saveTrips();
  }

  saveTrip() {
    const tripIndex = this.getTripIndex(this.currentPlannedTrip.id);
    if (tripIndex > -1) {
      this.trips[tripIndex] = this.currentPlannedTrip;
    } else {
      this.currentPlannedTrip.id = this.trips.length + 1;
      this.trips.push(this.currentPlannedTrip);
    }
    this.saveTrips();
  }

  getTripIndex(id: number) {
    return this.trips.findIndex((trip) => trip.id === id);
  }

  private loadTrips() {
    const trips = localStorage.getItem('trips');
    if (trips) {
      this.trips = JSON.parse(trips);
    }
  }

  private saveTrips() {
    localStorage.setItem('trips', JSON.stringify(this.trips));
  }
}
