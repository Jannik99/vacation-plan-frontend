import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TripPlannerService } from 'src/app/shared/services/trip-planner.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss'],
})
export class NewPlanComponent implements OnInit {
  backgroundImageString: string = '';

  files: File[] = [];

  constructor(public plannerService: TripPlannerService) {}

  ngOnInit(): void {
    if (this.plannerService.currentPlannedTrip.image) {
      this.files.push(this.plannerService.currentPlannedTrip.image);
      this.setBackgroundImageString();
    }
  }

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.plannerService.currentPlannedTrip.image = this.files[0];
    this.setBackgroundImageString();
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    this.plannerService.currentPlannedTrip.image = this.files[0];
    this.setBackgroundImageString();
  }

  addLocation(): void {
    this.plannerService.addLocationToCurrent();
  }

  locationDropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.plannerService.currentPlannedTrip.locations,
      event.previousIndex,
      event.currentIndex
    );
  }

  saveTrip(): void {
    this.plannerService.saveTrip();
  }

  private setBackgroundImageString(imagelink: string = ''): void {
    const ret =
      imagelink.length > 0
        ? 'url(' + imagelink + ')'
        : 'url(' + URL.createObjectURL(this.files[0]) + ')';
    this.backgroundImageString = ret;
    console.log(ret);
  }
}
