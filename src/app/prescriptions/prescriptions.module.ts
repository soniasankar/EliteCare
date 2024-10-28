import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { PrescriptionsComponent } from './prescriptions.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PrescriptionsComponent],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule,
    FormsModule
  ]
})
export class PrescriptionsModule { }
