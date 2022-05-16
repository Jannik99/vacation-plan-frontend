import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  imageUrl: string =
    'https://cdn.pixabay.com/photo/2021/10/02/08/58/wedding-6674650_1280.jpg';
  constructor(
    private plannerService: TripPlannerService,
    private router: Router
  ) {}

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

  edit() {
    this.plannerService.setCurrentPlannedTrip(this.trip);
    this.router.navigate(['/planner']);
    this.close.emit(true);
  }
}
