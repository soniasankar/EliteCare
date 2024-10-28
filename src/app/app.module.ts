import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  // Ensure FormsModule is imported
    BrowserAnimationsModule,  // Required animations module for Toastr
    ToastrModule.forRoot(),  // ToastrModule for notifications
    AppRoutingModule  // Application routing module
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
