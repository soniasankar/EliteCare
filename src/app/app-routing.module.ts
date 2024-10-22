import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [//empty route
  {path:'',redirectTo:'auth/login',pathMatch:'full'},
    //autherisation authentication
    {path:'auth',component:AuthComponent,
      loadChildren: () =>
        import('./auth/auth.module')
          .then(x=>x.AuthModule)
  
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
