import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { PlannerStepComponent } from './components/planner-step/planner-step.component';
import { PlannerRootComponent } from './planner-root/planner-root.component';
import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerStepEditComponent } from './components/planner-step-edit/planner-step-edit.component';

@NgModule({
  declarations: [PlannerRootComponent, NewPlanComponent, PlannerStepComponent, PlannerStepEditComponent],
  imports: [BasicModule, CommonModule, PlannerRoutingModule, NgxDropzoneModule],
})
export class PlannerModule {}
