import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient'; // Assuming you have a Patient model in the shared folder
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BookAppointment } from '../shared/book-appointment';
import{SpecializationR} from '../shared/specialization-r';
import{Deoctorsdetails} from '../shared/Deoctorsdetails';
import { AppointmentDetails } from '../shared/appointmentdetails';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // Declare variables - global variables
  patient: Patient = new Patient();
  patients: Patient[];
 

  // Http client module
  constructor(private httpClient: HttpClient) { }

  // Step 1:
  // Get all patients - promises
  getAllPatients(): void {
    console.log("In Service");
    this.httpClient.get(environment.apiUrl + 'patient')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.patients = response as Patient[];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // 2 Get all patients - observable types
  getAllPatientsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+'patient');
  }
  
  // 3 Insert patient
  insertPatient(patient: Patient): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'patient', patient);
  }

  // 4 Update patient
  updatePatient(patient: Patient): Observable<any> {
    console.log("Update in Service");
    return this.httpClient.put(environment.apiUrl + 'patient/' + patient.PatientId,patient);
  }


 // Schedule Appointment
  scheduleAppointment(srequest:BookAppointment): Observable<any> {
    console.log("Book Appointment in Service"+srequest);
    return this.httpClient.post(`${environment.apiUrl}Patient/ScheduleAppointment`, srequest); // Updated path
  }

  // Get all specializations
  getSpecializations(): Observable<SpecializationR[]> {
    return this.httpClient.get<SpecializationR[]>(`${environment.apiUrl}Patient/Specialization`);
    ; // Updated path
  }

  // Get doctors by specialization
  getDoctorsBySpecialization(specializationId: number): Observable<Deoctorsdetails[]> {
    return this.httpClient.get<Deoctorsdetails[]>(`${environment.apiUrl}Patient/DoctorsBySpecialization/${specializationId}`);
  }
  getLastAppointmentDetails(): Observable<AppointmentDetails> {
    return this.httpClient.get<AppointmentDetails>(`https://localhost:7159/api/Patient/last`);
    
  }
}