import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTravelsComponent } from './components/my-travels/my-travels.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyDataRootComponent } from './my-data-root/my-data-root.component';

const routes: Routes = [
  {
    path: '',
    component: MyDataRootComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'my-travels',
        component: MyTravelsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDataRoutingModule {}
