import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionsComponent } from './prescriptions.component';

const routes: Routes = [
  { path: ':patientId', component: PrescriptionsComponent } // Adjust route
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Ensure this is forChild
  exports: [RouterModule]
})
export class PrescriptionsRoutingModule { }