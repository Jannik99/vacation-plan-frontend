import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataRootComponent } from './my-data-root/my-data-root.component';

const routes: Routes = [
  {
    path: '',
    component: MyDataRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDataRoutingModule {}
