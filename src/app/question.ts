export class Question {
    questionId: number;
    questionTitle: string;
    questionOptions: string[];
    questionAnswer: number;
    questionMarks: number;
    testId: number;

    constructor(questionId: number, questionTitle: string, questionOptions: string[], questionAnswer: number, questionMarks: number, testId: number) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionOptions = questionOptions;
        this.questionAnswer = questionAnswer;
        this.questionMarks = questionMarks;
        this.testId = testId;
    }
}
