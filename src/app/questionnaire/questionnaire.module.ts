import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicModule } from '../shared/modules/basic/basic.module';
import { QuestionnaireQuestionComponent } from './components/questionnaire-question/questionnaire-question.component';
import { QuestionnaireRootComponent } from './questionnaire-root/questionnaire-root.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';

@NgModule({
  declarations: [QuestionnaireRootComponent, QuestionnaireQuestionComponent],
  imports: [BasicModule, CommonModule, QuestionnaireRoutingModule],
})
export class QuestionnaireModule {
  
}
