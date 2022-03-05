export enum IconType {
  IMAGE = 'image',
  MAT = 'mat-icon',
  SVG = 'svg',
}
export interface IIcon {
  path: string;
  type: IconType;
}
