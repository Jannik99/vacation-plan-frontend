export interface IAnswer {
  label: string;
  value: string;
}
export interface IAnswerNumberRange {
  min: number;
  max: number;
}

export interface IQuestion {
  question: string;
  answers?: IAnswer[];
  answerNumberRange?: IAnswerNumberRange;
  answerDate?: Date;
}
