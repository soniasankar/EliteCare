import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PatientsComponent } from './patients/patients.component';
import { BookAppointmentComponent } from './patients/bookappointmentr/bookappointmentr.component';

const routes: Routes = [//empty route
  {path:'',redirectTo:'patients/list',pathMatch:'full'},
    //autherisation authentication
    {path:'auth',component:AuthComponent,
      loadChildren: () =>
        import('./auth/auth.module')
          .then(x=>x.AuthModule)
  
    },
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


     //wild card route 
  {path:'**',redirectTo:'auth/pagenotfound',pathMatch:'full'}
  //pathmatch :http://localhost:4200/auth/pagenotfound
  //patchmatch defines how the router matches the url to the path"""
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
