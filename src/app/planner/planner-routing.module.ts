import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerRootComponent } from './planner-root/planner-root.component';

const routes: Routes = [
  {
    path: '',
    component: PlannerRootComponent,
    children: [
      {
        path: '',
        component: PlannerRootComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerRoutingModule {}
