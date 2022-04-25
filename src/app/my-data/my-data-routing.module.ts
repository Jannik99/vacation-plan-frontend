import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyQuestionsComponent } from './components/my-questions/my-questions.component';
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
        component: ProfileComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'my-questions',
        component: MyQuestionsComponent,
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
