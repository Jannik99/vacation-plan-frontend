import { Component, Input, OnInit } from '@angular/core';
import { ITrip } from 'src/app/shared/models/trip.interface';
import { Utilities } from 'src/app/shared/utilities';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  @Input() trip!: ITrip;
  imageUrl: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.trip);
    if (this.trip.image) {
      this.imageUrl = new Utilities().getFileLink(this.trip.image);
    }
  }
}
