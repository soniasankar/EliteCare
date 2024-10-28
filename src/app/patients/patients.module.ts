import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { BookAppointmentComponent } from './bookappointmentr/bookappointmentr.component';
import { PrintbillComponent } from './printbill/printbill.component';


@NgModule({
  declarations: [PatientsComponent, PatientAddComponent, PatientListComponent, PatientEditComponent, BookAppointmentComponent, PrintbillComponent ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PatientsModule { }
