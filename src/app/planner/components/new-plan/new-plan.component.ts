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

  files: File[] = [];

  constructor(public plannerService: TripPlannerService) {}

  ngOnInit(): void {}

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
