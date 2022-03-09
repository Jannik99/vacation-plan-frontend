import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireRootComponent } from './questionnaire-root/questionnaire-root.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireRoutingModule {}
