import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/models/question.interface';

@Component({
  selector: 'app-questionnaire-root',
  templateUrl: './questionnaire-root.component.html',
  styleUrls: ['./questionnaire-root.component.scss'],
})
export class QuestionnaireRootComponent implements OnInit {
  questions: IQuestion[] = [
    {
      question: 'QUESTIONNAIRE.QESTIONS.NUMBER_OF_PEOPLE',
      answerNumberRange: {
        min: 1,
        max: 10,
      },
    },
    {
      question: 'QUESTIONNAIRE.QESTIONS.NUMBER_OF_DAYS',
      answerNumberRange: {
        min: 1,
        max: 30,
      },
    },
    {
      question: 'QUESTIONNAIRE.QESTIONS.WHEN_TO_GO',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
