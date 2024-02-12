import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AssignTestComponent } from "./assign-test/assign-test.component";
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { ViewTestComponent } from './view-test/view-test.component';

import { ViewUsersComponent } from './view-users/view-users.component';
import { TestService } from './test.service';
import { QuestionService } from './question.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAssignedTestComponent } from './view-assigned-test/view-assigned-test.component';
import { AttendTestComponent } from './attend-test/attend-test.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CanActivateGaurdService } from './can-activate-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,

    LoginPageComponent,

    RegistrationPageComponent,

    AdminDashboardComponent,

    CreateTestComponent,

    ViewTestComponent,

    ViewUsersComponent,

    CreateQuestionComponent,

    ViewQuestionsComponent,

    UpdateQuestionComponent,

    AssignTestComponent,

    UserDashboardComponent,

    ViewAssignedTestComponent,
      
    AttendTestComponent,
           HomeComponent,
           ErrorComponent
  ],

  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],

  providers: [
    TestService,
    QuestionService,
    UserService,
    CanActivateGaurdService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
