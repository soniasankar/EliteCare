//Add medicne and prescreiption working

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// import {AddMultipleMedicinesDto } from '../shared/add-multiple-medicines-dto';

// import { AppointmentDto } from '../shared/appointment-dto';
// import { AddprescriptionDto } from '../shared/addprescription-dto';
// import { Medicine } from '../shared/medicine';

// @Injectable({
//   providedIn: 'root'
// })
// export class DoctorService {

//   constructor(private httpClient: HttpClient) { }

//   // Method to get appointments for a specific doctor
//   getDoctorAppointments(doctorId: number): Observable<AppointmentDto[]> {
//     return this.httpClient.get<AppointmentDto[]>(`${environment.apiUrl}doctor/${doctorId}/todays-appointments`);
//   }
//   // Method to search patients by ID
//   searchPatientById(patientId: number): Observable<AppointmentDto[]> {
//     return this.httpClient.get<AppointmentDto[]>(`${environment.apiUrl}patient/${patientId}`);
//   }
//    // Method to add a prescription
//    addPrescription(dto: AddprescriptionDto): Observable<AddprescriptionDto> {
//     return this.httpClient.post<any>(`${environment.apiUrl}Doctor/addPrescriptions`, dto);
//   }

//     // Method to get all medicines
//     listMedicines(): Observable<Medicine[]> {
//       return this.httpClient.get<Medicine[]>(`${environment.apiUrl}Doctor/ListMedicines`);
//     }
  
//     // Method to search medicines by query
//     searchMedicines(query: string): Observable<Medicine[]> {
//       return this.httpClient.get<Medicine[]>(`${environment.apiUrl}medicines/search?query=${query}`);
//     }
//      // Method to add multiple medicines
//   addMultipleMedicines(medicines: AddMultipleMedicinesDto[]): Observable<any> {
//     return this.httpClient.post(`${environment.apiUrl}Doctor/addmultiplemedicine`, medicines);
//   }


// }





















import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AddMultipleMedicinesDto } from '../shared/add-multiple-medicines-dto';
import { AppointmentDto } from '../shared/appointment-dto';
import { AddprescriptionDto } from '../shared/addprescription-dto';
import { Medicine } from '../shared/medicine';
import { Test } from '../shared/test'; // Assuming you have a Test class
import { PatientDto } from '../shared/patient-dto';
import { MedicalRecordPrescriptionDto } from '../shared/medical-record-prescription-dto';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  // Method to get appointments for a specific doctor
  getDoctorAppointments(doctorId: number): Observable<AppointmentDto[]> {
    return this.httpClient.get<AppointmentDto[]>(`${environment.apiUrl}doctor/${doctorId}/todays-appointments`);
  }

  getPatientById(patientId: number): Observable<PatientDto> {
    return this.httpClient.get<PatientDto>(`${environment.apiUrl}doctor/${patientId}`);
}

  // Method to search patients by ID
  searchPatientById(patientId: number): Observable<AppointmentDto[]> {
    return this.httpClient.get<AppointmentDto[]>(`${environment.apiUrl}patient/${patientId}`);
  }

  // Method to add a prescription
  addPrescription(dto: AddprescriptionDto): Observable<AddprescriptionDto> {
    return this.httpClient.post<any>(`${environment.apiUrl}Doctor/addPrescriptions`, dto);
  }

  // Method to get all medicines
  listMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${environment.apiUrl}Doctor/ListMedicines`);
  }

  // Method to search medicines by query
  searchMedicines(query: string): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${environment.apiUrl}medicines/searchmedicine?query=${query}`);
   // https://localhost:7159/api/Doctor/searchmedicine?name=dolo
  }

  // Method to add multiple medicines
  addMultipleMedicines(medicines: AddMultipleMedicinesDto[]): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}Doctor/addmultiplemedicine`, medicines);
  }

  // Method to get all tests
  listTests(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(`${environment.apiUrl}Doctor/ListTest`);
  }

  // Method to search tests by query
  searchTests(query: string): Observable<Test[]> {
    return this.httpClient.get<Test[]>(`${environment.apiUrl}tests/search?query=${query}`);
  }
  //method to get patient history
  getPatientHistory(patientId: number): Observable<MedicalRecordPrescriptionDto []> {
    return this.httpClient.get<MedicalRecordPrescriptionDto []>(`${environment.apiUrl}doctor/history/${patientId}`);
  }
}


