import { Component, OnInit } from '@angular/core';
import { IconType } from 'src/app/shared/models/icon.interface';
import { IFunctionButton } from './function-button/function-button.component';

@Component({
  selector: 'app-function-buttons',
  templateUrl: './function-buttons.component.html',
  styleUrls: ['./function-buttons.component.scss'],
})
export class FunctionButtonsComponent implements OnInit {
  functionButtons: IFunctionButton[] = [
    {
      name: 'Info',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: { background: 'RGBA(253, 191, 175, 0.8)', font: '#FFFFFF' },
      icon: {
        path: '/assets/Icons/ico-info.svg',
        type: IconType.SVG,
      },
    },
    {
      name: 'Info',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: { background: 'RGBA(253, 191, 175, 0.8)', font: '#FFFFFF' },
      icon: {
        path: '/assets/Icons/ico-info.svg',
        type: IconType.SVG,
      },
    },
    {
      name: 'Info',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: { background: 'RGBA(253, 191, 175, 0.8)', font: '#FFFFFF' },
      icon: {
        path: '/assets/Icons/ico-info.svg',
        type: IconType.SVG,
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
