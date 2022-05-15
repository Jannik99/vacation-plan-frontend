import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITrip } from 'src/app/shared/models/trip.interface';
import { TripPlannerService } from 'src/app/shared/services/trip-planner.service';
import { Utilities } from 'src/app/shared/utilities';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  @Input() trip!: ITrip;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  imageUrl: string = '';
  constructor(private plannerService: TripPlannerService) {}

  ngOnInit(): void {
    console.log(this.trip);
    if (this.trip.image) {
      this.imageUrl = new Utilities().getFileLink(this.trip.image);
    }
  }

  delete() {
    this.plannerService.removeTrip(this.trip);
    this.close.emit(true);
  }
}
