import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IQuestion } from 'src/app/shared/models/question.interface';

@Component({
  selector: 'app-questionnaire-question',
  templateUrl: './questionnaire-question.component.html',
  styleUrls: ['./questionnaire-question.component.scss'],
})
export class QuestionnaireQuestionComponent implements OnInit {
  @Input()
  question!: IQuestion;
  @Input() questionIndex!: number;
  backgroundClass: string = 'fallback-bg';
  constructor(private translateservice: TranslateService) {}

  ngOnInit(): void {
    this.setBackgroundClass();
    this.question.question = this.translateservice.instant(
      this.question.question
    ).QUESTION;
  }

  setBackgroundClass(): void {
    this.backgroundClass =
      'background-' + ((this.questionIndex % 4) + 1).toString();
  }
}
