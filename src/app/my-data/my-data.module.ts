import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataRootComponent } from './my-data-root/my-data-root.component';


@NgModule({
  declarations: [
    MyDataRootComponent
  ],
  imports: [
    CommonModule,
    MyDataRoutingModule
  ]
})
export class MyDataModule { }
