import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { QuestionnaireOverviewComponent } from './components/questionnaire-overview/questionnaire-overview.component';
import { QuestionnaireQuestionComponent } from './components/questionnaire-question/questionnaire-question.component';
import { QuestionnaireRootComponent } from './questionnaire-root/questionnaire-root.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    QuestionnaireRootComponent,
    QuestionnaireQuestionComponent,
    QuestionnaireOverviewComponent,
    QuestionnaireComponent,
  ],
  imports: [BasicModule, CommonModule, QuestionnaireRoutingModule],
})
export class QuestionnaireModule {}
