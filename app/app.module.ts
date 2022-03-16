import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PatientComponent } from './patient/patient.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ListofdoctorsComponent } from './listofdoctors/listofdoctors.component';
import { ListofpatientsComponent } from './listofpatients/listofpatients.component';
import { ListofappointmentsComponent } from './listofappointments/listofappointments.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { DeleteComponent } from './delete/delete.component';
import { AppointmentComponent } from './appointment/appointment.component';




const parentModuleRoutes: Routes=[
  {
    path:'',component:HomeComponent,
  },
  {path: "home", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "contact", component:ContactComponent},
  {path: "help", component:HelpComponent},
  {path: "signup",component:SignupComponent},
  {path: "signin", component:SigninComponent},
  {path: "editprofile",component:EditprofileComponent},
  {path: "changepassword",component:ChangepasswordComponent},
  {path: "listofappointments",component:ListofappointmentsComponent},
  {path: "listofdoctors",component:ListofdoctorsComponent},
  {path: "listofpatients",component:ListofpatientsComponent},
  {path :"afterlogin",component:AfterloginComponent},
  {path :"delete/:No",component:DeleteComponent},
  {path :"doctor",component:DoctorComponent},
  {path :"patient",component:PatientComponent},
  {path :"appointment",component:AppointmentComponent}
  // {
  //   path:'afterlogin',component:AfterloginComponent,children:[{path:'editprofile',component:EditprofileComponent}]
  // },
  // {
  //   path:'afterlogin',component:AfterloginComponent,children:[{path:'changepassword',component:ChangepasswordComponent}]
  // },
  // {
  //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofappointments',component:ListofappointmentsComponent}]
  // },
  // {
  //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofdoctors',component:ListofdoctorsComponent}]
  // },
  // {
  //   path:'afterlogin',component:AfterloginComponent,children:[{path:'listofpatients',component:ListofpatientsComponent}]
  // }
  // {
  //   path:'aftersignup',component:SignupComponent,children:[{path:'signupdoc',component:SignupdocComponent}]
  // },
  // {
  //   path:'aftersignup',component:SignupComponent,children:[{path:'signuprecep',component:SignuprecepComponent}]
  // },
  // {
  //   path:'aftersignup',component:SignupComponent,children:[{path:'signuppat',component:SignuppatComponent}]
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    DoctorComponent,
    ReceptionistComponent,
    PatientComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    ListofdoctorsComponent,
    ListofpatientsComponent,
    ListofappointmentsComponent,
    AfterloginComponent,
    DeleteComponent,
    AppointmentComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forRoot(parentModuleRoutes)
  ],
  exports:[RouterModule],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
