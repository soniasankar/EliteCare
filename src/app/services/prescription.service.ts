import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
//import { PrescriptionDto } from '../models/prescription-dto';
//import { AddPrescriptionDto } from '../models/add-prescription-dto'; // Adjust the import as necessary
import { PrescriptionDto } from '../shared/prescription-dto';
//import { AddPrescriptionDto } from '../shared/add-prescription-dto';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = `${environment.apiUrl}/prescriptions`;

  constructor(private http: HttpClient) {}

  // // Method to add a new prescription
  // addPrescription(addPrescriptionDto: AddPrescriptionDto): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, addPrescriptionDto);
  // }

  // // Method to get all prescriptions for a patient (if needed)
  // getPrescriptions(patientId: number): Observable<PrescriptionDto[]> {
  //   return this.http.get<PrescriptionDto[]>(`${this.apiUrl}/patient/${patientId}`);
  // }

  // // Method to get details of a specific prescription (if needed)
  // getPrescriptionDetail(prescriptionId: number): Observable<PrescriptionDto> {
  //   return this.http.get<PrescriptionDto>(`${this.apiUrl}/${prescriptionId}`);
  // }

  // Additional methods can be added here as necessary
}
