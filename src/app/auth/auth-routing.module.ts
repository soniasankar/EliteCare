// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { ReceptionistComponent  } from './receptionist/receptionist.component';
// import { DoctorComponent } from './doctor/doctor.component';
// import { HomeComponent } from './home/home.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { AuthGuard } from 'src/app/auth/auth.guard';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'doctor', component: DoctorComponent,
//     canActivate: [AuthGuard], data: { RoleId: '1' }
//   },
//   {path: 'receptionist', component:  ReceptionistComponent ,
//     canActivate: [AuthGuard], data: { RoleId: '2' }
//   },

//   { path: 'pagenotfound', component: PagenotfoundComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// //hi
// export class AuthRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { AddPrescriptionComponent } from 'src/app/auth/doctor/addprescription/addprescription.component';

import { AuthGuard } from 'src/app/auth/auth.guard';
//import { PrescriptionComponent } from 'src/app/prescriptions/prescriptions.component'; // Adjust the path as necessary
//import { PrescriptionComponent } from 'src/app/prescriptions/prescriptions.component'; // Use the correct file name


//import { PrescriptionComponent } from './src/app/prescriptions/prescriptions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: { RoleId: '1' } },
  //{ path: 'prescriptions/:PatientId', component:PrescriptionComponent },
  // { path: 'prescriptions/:patientId', component: AddPrescriptionComponent }, 
  { path: 'receptionist', component: ReceptionistComponent, canActivate: [AuthGuard], data: { RoleId: '2' } },
  { path: 'pagenotfound', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
