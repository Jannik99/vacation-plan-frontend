import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/models/question.interface';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questions: IQuestion[] = [
    {
      question: 'QUESTIONNAIRE.QUESTIONS.NUMBER_OF_PEOPLE',
      answerNumberRange: {
        min: 1,
        max: 10,
      },
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.NUMBER_OF_DAYS',
      answerNumberRange: {
        min: 1,
        max: 30,
      },
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.WHEN_TO_GO',
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.NUMBER_OF_DAYS',
      answerNumberRange: {
        min: 1,
        max: 30,
      },
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.WHEN_TO_GO',
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.NUMBER_OF_DAYS',
      answerNumberRange: {
        min: 1,
        max: 30,
      },
    },
    {
      question: 'QUESTIONNAIRE.QUESTIONS.WHEN_TO_GO',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
