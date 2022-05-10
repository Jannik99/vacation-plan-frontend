import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/models/trip.interface';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss'],
})
export class MyTravelsComponent implements OnInit {
  trips: ITrip[] = [];
  shownTrip: ITrip | null = null;
  constructor() {
    this.loadTrips();
  }

  ngOnInit(): void {}

  showTrip(trip: ITrip) {
    this.shownTrip = trip;
  }

  private loadTrips() {
    const trips = localStorage.getItem('trips');
    if (trips) {
      this.trips = JSON.parse(trips);
    }
  }
}
