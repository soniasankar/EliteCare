import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import {BookAppointmentComponent} from './bookappointmentr/bookappointmentr.component';
import { PrintbillComponent } from './printbill/printbill.component';
const routes: Routes = [

//patients-list: htpps://localhost:4200/patients/list
{ path: 'list', component: PatientListComponent },
//patients-add: htpps://localhost:4200/patients/add
{path: 'add', component: PatientAddComponent },
//patients-edit: htpps://localhost:4200/patients/edit
{ path: 'edit/:id', component: PatientEditComponent },
// Patient appointment route: https://localhost:4200/patients/book/:id
{ path: 'book-appointment/:id', component: BookAppointmentComponent }, // Updated route for booking an appointment
{ path: 'bill', component: PrintbillComponent }, // Updated route for booking an appointment

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
