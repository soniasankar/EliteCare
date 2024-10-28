// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { FormsModule } from '@angular/forms';
// import {AuthGuard } from './auth/auth.guard';

// import { CmsInterceptor } from './auth/cms.interceptor';
// import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
// //import { PrescriptionAddComponent } from './doctorss/prescription-add/prescription-add.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     PrescriptionsComponent
//     //PrescriptionAddComponent,
//    // HomeComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     BrowserAnimationsModule, // required animations module
//     ToastrModule.forRoot(),
//     AppRoutingModule
//   ],
//   providers: [AuthGuard,
//   {
//     provide:HTTP_INTERCEPTORS,
//     useClass:CmsInterceptor,
//     multi:true
//   },
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { CmsInterceptor } from './auth/cms.interceptor';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { FilterPipe } from './filter.pipe';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    PrescriptionsComponent,
    HistoryComponent,
    FilterPipe
=======

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';  // <-- Ensure FormsModule is imported here

import { CmsInterceptor } from './auth/cms.interceptor';

// BookappointmentrComponent should only be declared in PatientsModule
@NgModule({
  declarations: [
    AppComponent,
>>>>>>> 46dc3b434510d5996686cf79b0608f24036e0b75
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
=======
    FormsModule,  // Ensure FormsModule is imported
    BrowserAnimationsModule,  // Required animations module for Toastr
    ToastrModule.forRoot(),  // ToastrModule for notifications
    AppRoutingModule  // Application routing module
>>>>>>> 46dc3b434510d5996686cf79b0608f24036e0b75
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CmsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
