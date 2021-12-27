import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyClassroomComponent } from './my-classroom/my-classroom.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StartcourseComponent } from './startcourse/startcourse.component';
import { ResetinstructionsComponent } from './resetinstructions/resetinstructions.component';
import { SignupComponent } from './signup/signup.component';
import { ResetNewpasswordComponent } from './reset-newpassword/reset-newpassword.component';
import { SigninComponent } from './signin/signin.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { CertificateverifyComponent } from './certificateverify/certificateverify.component';
import { ResetPasswordComponent} from './reset-password/reset-password.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assigment2Component } from './assigment2/assigment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage', component: HomepageComponent},
  {path:'my-classroom',component:MyClassroomComponent},
  {path: 'resetpassword',component:ResetpasswordComponent},
  {path: 'startcourse',component:StartcourseComponent},
  {path : 'resetinstructions' , component:ResetinstructionsComponent},
  {path : 'signup', component:SignupComponent },
  {path: 'resetnewpassword',component:ResetNewpasswordComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'orderdetails', component : OrderDetailsComponent},
  {path : 'certificate', component : CertificateComponent},
  {path : 'cybersecurity' , component: CybersecurityComponent},
  {path : 'certificateverify',component:CertificateverifyComponent},
  { path : 'reset-password', component : ResetPasswordComponent},
  {path : 'changepassword' ,component :ChangepasswordComponent},
  {path : 'questions', component:QuestionsComponent},
  {path : 'coursecompletionstatus',component:CoursecompletionstatusComponent},
  {path :'recordedclasses1',component:Recordedclasses1Component},
  {path : 'Check-Email',component:CheckEmailComponent},
  {path : 'changephoto',component:ChangePhotoComponent},
  {path : 'courseinfo',component:CourseinfoComponent},
  {path : 'resources',component :ResourcesComponent},
  {path : 'assignments',component:AssignmentsComponent},
  {path : 'projects',component:ProjectsComponent},
  {path : 'discuss',component:DiscussComponent},
  {path : 'navbar',component : NavbarComponent},
  {path : 'feedback',component:FeedbackComponent},
  {path : 'invoice',component:InvoiceComponent},
  {path : 'assignment1', component:Assignment1Component},
  {path : 'assignment2',component:Assigment2Component},
  {path : 'Assignment3',component:Assignment3Component},
  {path : 'Assignment4',component :Assignment4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
