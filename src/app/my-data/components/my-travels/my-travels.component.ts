import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/models/trip.interface';
import { TripPlannerService } from 'src/app/shared/services/trip-planner.service';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss'],
})
export class MyTravelsComponent implements OnInit {
  shownTrip: ITrip | null = null;

  constructor(public tripPlannerService: TripPlannerService) {}

  ngOnInit(): void {}

  showTrip(trip: ITrip) {
    this.shownTrip = trip;
  }

  hideTrip() {
    this.shownTrip = null;
  }
}
