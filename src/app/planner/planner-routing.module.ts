import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { PlannerRootComponent } from './planner-root/planner-root.component';

const routes: Routes = [
  {
    path: '',
    component: PlannerRootComponent,
    children: [
      {
        path: '',
        component: NewPlanComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerRoutingModule {}
