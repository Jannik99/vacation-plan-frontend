import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from 'src/app/shared/models/location.interface';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {
  @Input() location!: ILocation;
  imageLink = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.location);
    this.setImageString();
  }

  private setImageString() {
    if (this.location.image) {
      this.imageLink = URL.createObjectURL(this.location.image);
    }
  }
}
