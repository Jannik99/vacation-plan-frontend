import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataRootComponent } from './my-data-root/my-data-root.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyQuestionsComponent } from './components/my-questions/my-questions.component';
import { MyTravelsComponent } from './components/my-travels/my-travels.component';


@NgModule({
  declarations: [
    MyDataRootComponent,
    ProfileComponent,
    MyQuestionsComponent,
    MyTravelsComponent
  ],
  imports: [
    CommonModule,
    MyDataRoutingModule
  ]
})
export class MyDataModule { }
