import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { PlannerStepComponent } from './components/planner-step/planner-step.component';
import { PlannerRootComponent } from './planner-root/planner-root.component';
import { PlannerRoutingModule } from './planner-routing.module';

@NgModule({
  declarations: [PlannerRootComponent, NewPlanComponent, PlannerStepComponent],
  imports: [BasicModule, CommonModule, PlannerRoutingModule],
})
export class PlannerModule {}
