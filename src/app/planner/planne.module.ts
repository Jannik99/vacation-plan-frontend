import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { PlannerRootComponent } from './planner-root/planner-root.component';
import { PlannerRoutingModule } from './planner-routing.module';

@NgModule({
  declarations: [PlannerRootComponent],
  imports: [BasicModule, CommonModule, PlannerRoutingModule],
})
export class PlannerModule {}
