import { PatientsComponent } from './patients/patients.component';
import { BookAppointmentComponent } from './patients/bookappointmentr/bookappointmentr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PrescriptionsComponent } from 'src/app/prescriptions/prescriptions.component';
import { HistoryComponent } from 'src/app/history/history.component';
const routes: Routes = [
  // Empty route
  { path: '', redirectTo: 'auth/home', pathMatch: 'full' },
  
  // Authorization and authentication
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./auth/auth.module').then(x => x.AuthModule),
  },
  { path: 'prescriptions/:patientId', component: PrescriptionsComponent }, 
  { path: 'history/:patientId', component: HistoryComponent }, 
  // Wildcard route for 404
  { path: '**', redirectTo: 'auth/pagenotfound', pathMatch: 'full' },

     //patient ---- lazy loading
  {
    path: 'patients', component: PatientsComponent,
    loadChildren: () =>
      import('./patients/patients.module')
        .then(x => x.PatientsModule)
  },
// Route for booking appointment
{
  
  path: 'patients/book-appointment', // New route for booking an appointment
  component: BookAppointmentComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

