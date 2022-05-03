import { Component, OnInit } from '@angular/core';
import { IconType } from 'src/app/shared/models/icon.interface';
import { INavigationItem } from 'src/app/shared/models/navigation-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  icontype = IconType;
  navItems: INavigationItem[] = [
    {
      title: '',
      link: '/',
      icon: {
        path: '/assets/Logo/logo-placeholder.png',
        type: IconType.IMAGE,
      },
      exactMatch: true,
    },
    {
      title: 'Reiseplaner',
      link: 'planner',
      icon: { path: '/assets/Icons/ico-list-alt.svg', type: IconType.SVG },
      exactMatch: false,
    },
    {
      title: 'Meine Daten',
      link: 'my-data',
      icon: { path: '/assets/Icons/ico-person-waving.svg', type: IconType.SVG },
      exactMatch: false,
    },
    {
      title: 'Reisetipps',
      link: 'travel-tips',
      icon: { path: 'assets/Icons/ico-lightbulb.svg', type: IconType.SVG },
      exactMatch: false,
    },
    {
      title: 'Weiteres',
      link: 'more',
      icon: { path: 'assets/Icons/ico-arrow-right.svg', type: IconType.SVG },
      exactMatch: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
