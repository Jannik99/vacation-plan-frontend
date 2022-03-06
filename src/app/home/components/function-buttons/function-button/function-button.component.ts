import { Component, Input, OnInit } from '@angular/core';
import { IIcon } from 'src/app/shared/models/icon.interface';

export interface IFunctionButton {
  name: string;
  text: string;
  color: { background: string; font: string };
  icon: IIcon;
}

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.scss'],
})
export class FunctionButtonComponent implements OnInit {
  @Input()
  functionButton!: IFunctionButton;
  constructor() {}

  ngOnInit(): void {}
}
