import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyTravelsComponent } from './components/my-travels/my-travels.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyDataRootComponent } from './my-data-root/my-data-root.component';
import { MyDataRoutingModule } from './my-data-routing.module';

@NgModule({
  declarations: [MyDataRootComponent, ProfileComponent, MyTravelsComponent],
  imports: [CommonModule, MyDataRoutingModule],
})
export class MyDataModule {}
