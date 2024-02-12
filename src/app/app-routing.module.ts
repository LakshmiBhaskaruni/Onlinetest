import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AttendTestComponent} from "./attend-test/attend-test.component";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CanActivateGaurdService } from './can-activate-gaurd.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate:[CanActivateGaurdService]},
  // { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'admin-dashboard',component: AdminDashboardComponent, canActivateChild:[CanActivateGaurdService] ,children: [
    {path: 'home', component: HomeComponent, },
    { path: 'create-test', component: CreateTestComponent },
    { path: 'view-test', component: ViewTestComponent},
    { path: 'view-test', children: [
      { path: 'create-question/:id', component: CreateQuestionComponent },
      { path: 'view-questions/:id', component: ViewQuestionsComponent },
    ] },
    { path: 'view-users', component: ViewUsersComponent }
  ]},
  // { path: 'create-question/:id', component: CreateQuestionComponent,canActivateChild:[CanActivateGaurdService] },
  // { path: 'view-questions/:id', component: ViewQuestionsComponent,canActivateChild:[CanActivateGaurdService] },

  
  { path: 'view-questions', component: ViewQuestionsComponent, canActivateChild:[CanActivateGaurdService] },
  { path: 'update-question', component: UpdateQuestionComponent, canActivateChild:[CanActivateGaurdService] },
  { path: 'assign-test/:id', component: AssignTestComponent, canActivateChild:[CanActivateGaurdService] },
  { path: 'user-dashboard/:id', component: UserDashboardComponent, canActivateChild:[CanActivateGaurdService] },
  { path: 'attend-test/:id', component: AttendTestComponent, canActivateChild:[CanActivateGaurdService] },

  { path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
