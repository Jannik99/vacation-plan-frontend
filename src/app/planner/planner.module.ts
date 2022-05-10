import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { PlannerStepEditComponent } from './components/planner-step-edit/planner-step-edit.component';
import { PlannerRootComponent } from './planner-root/planner-root.component';
import { PlannerRoutingModule } from './planner-routing.module';

@NgModule({
  declarations: [
    PlannerRootComponent,
    NewPlanComponent,
    PlannerStepEditComponent,
  ],
  imports: [BasicModule, CommonModule, PlannerRoutingModule, NgxDropzoneModule],
})
export class PlannerModule {}
