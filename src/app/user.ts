export class User {
  userId: number;
  username: string;
  password: string;
  role: string;
  testId: number;
  testAttended: boolean;

  constructor(userId: number, username: string, password: string, role: string, testId: number, testAttended: boolean) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.role = role;
    this.testId = testId;
    this.testAttended = testAttended;
  }
}
