import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyClassroomComponent } from './my-classroom/my-classroom.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StartcourseComponent } from './startcourse/startcourse.component';
import { ResetNewpasswordComponent } from './reset-newpassword/reset-newpassword.component';
import { ResetinstructionsComponent } from './resetinstructions/resetinstructions.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { CertificateverifyComponent } from './certificateverify/certificateverify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { QuestionsComponent } from './questions/questions.component';
import { CoursecompletionstatusComponent } from './coursecompletionstatus/coursecompletionstatus.component';
import { Recordedclasses1Component } from './recordedclasses1/recordedclasses1.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ChangePhotoComponent } from './change-photo/change-photo.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ResourcesComponent } from './resources/resources.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProjectsComponent } from './projects/projects.component';
import { DiscussComponent } from './discuss/discuss.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assigment2Component } from './assigment2/assigment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment4Component } from './assignment4/assignment4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MyClassroomComponent,
    ResetpasswordComponent,
    StartcourseComponent,
    ResetNewpasswordComponent,
    ResetinstructionsComponent,
    SignupComponent,
    SigninComponent,
    OrderDetailsComponent,
    CertificateComponent,
    CybersecurityComponent,
    CertificateverifyComponent,
    ResetPasswordComponent,
    ChangepasswordComponent,
    QuestionsComponent,
    CoursecompletionstatusComponent,
    Recordedclasses1Component,
    CheckEmailComponent,
    ChangePhotoComponent,
    CourseinfoComponent,
    ResourcesComponent,
    AssignmentsComponent,
    ProjectsComponent,
    DiscussComponent,
    FeedbackComponent,
    InvoiceComponent,
    Assignment1Component,
    Assigment2Component,
    Assignment3Component,
    AssignmentComponent,
    Assignment4Component,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
