import { Component, OnInit } from '@angular/core';
import { TripPlannerService } from 'src/app/shared/services/trip-planner.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss'],
})
export class NewPlanComponent implements OnInit {
  backgroundImageString: string =
    'url(' + this.plannerService.currentPlannedTrip.image + ')';

  constructor(public plannerService: TripPlannerService) {}

  ngOnInit(): void {}
}
