import { Component, OnInit } from '@angular/core';
import { INavigationItem } from 'src/app/shared/models/navigation-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems: INavigationItem[] = [
    {
      title: 'Home',
      link: '',
      icon: '',
      exactMatch: true,
    },
    {
      title: 'Fragebogen',
      link: 'questionnaire',
      icon: '',
      exactMatch: false,
    },
    {
      title: 'Platzhalter',
      link: 'a',
      icon: '',
      exactMatch: false,
    },
    {
      title: 'Platzhalter',
      link: 'b',
      icon: '',
      exactMatch: false,
    },
    {
      title: 'Platzhalter',
      link: 'c',
      icon: '',
      exactMatch: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
