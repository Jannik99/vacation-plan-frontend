import { Component, Input, OnInit } from '@angular/core';
import { TripPlannerService } from 'src/app/shared/services/trip-planner.service';

@Component({
  selector: 'app-planner-step-edit',
  templateUrl: './planner-step-edit.component.html',
  styleUrls: ['./planner-step-edit.component.scss'],
})
export class PlannerStepEditComponent implements OnInit {
  @Input() index!: number;
  files: File[] = [];
  imageLink = '';

  constructor(public plannerService: TripPlannerService) {}

  ngOnInit(): void {
    this.setImageString();
  }

  private setImageString() {
    if (this.plannerService.currentPlannedTrip.locations[this.index].image) {
      this.imageLink = URL.createObjectURL(
        this.plannerService.currentPlannedTrip.locations[this.index]
          .image as File
      );
    }
  }

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.plannerService.currentPlannedTrip.image = this.files[0];
    this.setImageString();
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    this.plannerService.currentPlannedTrip.image = this.files[0];
    this.setImageString();
  }

  deleteThisStep() {
    this.plannerService.removeLocationFromCurrent(this.index);
  }
}
