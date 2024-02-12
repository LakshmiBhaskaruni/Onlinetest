export class Test {
  testId: number;
  testTitle: string;
  testDuration: string;
  startTime: string;
  endTime: string;


  constructor(testId: number, testTitle: string, testDuration: string, startTime: string, endTime: string) {
    this.testId = testId;
    this.testTitle = testTitle;
    this.testDuration = testDuration;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
