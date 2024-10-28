import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  constructor(public patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    // Initialization if required
  }
  

  // Submit Form
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.updatePatient(form);
      form.reset();
    }
  }

  /// Update patient method
  updatePatient(form?: NgForm) {
    console.log("Updating patient...");
    this.patientService.updatePatient(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.patientService.getAllPatients(); 
        },
        (error) => {
          console.log(error);
        }
      );
  }

    
  // Navigate back to the patient list
  goBack() {
    this.router.navigate(['patients/list']);
  }

}