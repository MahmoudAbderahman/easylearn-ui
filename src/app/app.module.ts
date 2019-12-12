import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EasylearnService} from './services/data/easylearn.service';
import { TeacherComponent } from './components/teacher/teacher-list/teacher.component';
import { ParentComponent } from './components/parent/parent-list/parent.component';
import { StudentComponent } from './components/student/student-list/student.component';
import { CourseComponent } from './components/course/course-list/course.component';
import { AppointmentComponent } from './components/appointment/appointment-list/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentCreateComponent } from './components/student/student-create/student-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeacherCreateComponent } from './components/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './components/teacher/teacher-update/teacher-update.component';
import { ParentUpdateComponent } from './components/parent/parent-update/parent-update.component';
import { ParentCreateComponent } from './components/parent/parent-create/parent-create.component';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseUpdateComponent } from './components/course/course-update/course-update.component';
import { AppointmentCreateComponent } from './components/appointment/appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './components/appointment/appointment-update/appointment-update.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ParentComponent,
    StudentComponent,
    CourseComponent,
    AppointmentComponent,
    LoginComponent,
    AdminPageComponent,
    UserComponent,
    ErrorComponent,
    MenuAdminComponent,
    StudentUpdateComponent,
    StudentCreateComponent,
    LogoutComponent,
    FooterComponent,
    TeacherCreateComponent,
    TeacherUpdateComponent,
    ParentUpdateComponent,
    ParentCreateComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EasylearnService],
  bootstrap: [AppComponent]
})
export class AppModule { }