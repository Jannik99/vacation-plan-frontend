import { IIcon } from './icon.interface';

export interface INavigationItem {
  title: string;
  link: string;
  icon: IIcon;
  exactMatch: boolean;
}
