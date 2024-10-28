import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/shared/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  // Declare variables
  searchTerm: string = '';
  page: number = 1;

  // For filtered patients
  filteredPatients: Patient[] = [];

  // Inject PatientService and Router
  constructor(public patientService: PatientService, private router: Router) {}

  // Life cycle hook
  ngOnInit(): void {
    console.log('Hi, I am Patient List Component');
    
    // Observable type to fetch patient list
    this.patientService.getAllPatientsList().subscribe(
      (data: Patient[]) => {
        this.patientService.patients = data; // Assign to global service
        this.filteredPatients = data;  // Assign to local component list
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }

  // Method to filter patients based on searchTerm
  filterPatients(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.patientService.patients.filter(
      patient =>
        (patient?.FirstName?.toLowerCase() + ' ' + patient?.LastName?.toLowerCase()).includes(term) ||
        patient?.PhoneNumber?.toLowerCase().includes(term)
    );
  }

  // Edit Patient
  editPatient(patient: Patient): void {
    console.log(patient);

    this.patientService.patient = Object.assign({},patient);// Store patient object in service for editing
    //Date format
    var datePipe = new DatePipe("en-UK");
    let formattedYear: any = datePipe.transform(patient.Dob,'yyyy-MM-dd');
    this.patientService.patient.Dob=formattedYear;

   
    this.router.navigate(['/patients/edit', patient.PatientId]); // Navigate to edit page
//Date format for RegisterDate
var datePipe = new DatePipe("en-UK");
let formattedRegisterDate: any = datePipe.transform(patient.RegisterDate, 'yyyy-MM-dd');
this.patientService.patient.RegisterDate = formattedRegisterDate;

// Navigate to edit page
this.router.navigate(['/patients/edit', patient.PatientId]);

  }



  // View Patient Information
  viewPatientInfo(patient: Patient): void {
    this.router.navigate(['/patients/info', patient.PatientId]); // Navigate to patient info page
  }


  // Book Appointment for Patient
bookAppointment(patient: Patient): void {
  this.router.navigate(['/patients/book-appointment', patient.PatientId]); // Navigate to the booking page for the specific patient
}

}