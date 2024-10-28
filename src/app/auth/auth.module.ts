import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctornavbarComponent } from './doctornavbar/doctornavbar.component';
import { ReceptionistnavbarComponent } from './receptionistnavbar/receptionistnavbar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { AddprescriptionComponent } from './doctor/addprescription/addprescription.component';


@NgModule({
  declarations: [AuthComponent, NavbarComponent, DoctornavbarComponent, ReceptionistnavbarComponent,  HomeComponent, LoginComponent, DoctorComponent, ReceptionistComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
