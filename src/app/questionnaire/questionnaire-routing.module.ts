import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireOverviewComponent } from './components/questionnaire-overview/questionnaire-overview.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionnaireRootComponent } from './questionnaire-root/questionnaire-root.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireRootComponent,
    children: [
      {
        path: '',
        component: QuestionnaireOverviewComponent,
      },
      {
        path: 'all-questions',
        component: QuestionnaireComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireRoutingModule {}
