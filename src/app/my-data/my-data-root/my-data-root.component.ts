import { Component, OnInit } from '@angular/core';
import { IconType } from 'src/app/shared/models/icon.interface';
import { INavigationItem } from 'src/app/shared/models/navigation-item.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-data-root',
  templateUrl: './my-data-root.component.html',
  styleUrls: ['./my-data-root.component.scss'],
})
export class MyDataRootComponent implements OnInit {
  navItems: INavigationItem[] = [
    {
      title: 'PROFILE',
      link: 'profile',
      icon: { path: '/assets/Icons/ico-list-alt.svg', type: IconType.SVG },
      exactMatch: false,
    },
    {
      title: 'MY_QUESTIONS',
      link: 'my-questions',
      icon: { path: '/assets/Icons/ico-person-waving.svg', type: IconType.SVG },
      exactMatch: false,
    },
    {
      title: 'MY_TRAVELS',
      link: 'my-travels',
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
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
