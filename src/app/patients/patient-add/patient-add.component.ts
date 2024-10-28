import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  constructor(public patientService: PatientService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // Additional logic if needed
  }

  // Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.addPatient(form);
    form.reset();
    this.router.navigate(['patients/list']);
  }

  // Insert new patient
  addPatient(form?: NgForm) {
    console.log("Inserting patient...");
    this.patientService.insertPatient(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Patient has been added successfully!', 'EliteCare');
          this.patientService.getAllPatients();
        },
        (error) => {
          console.log(error);
          this.toastr.error('Something went wrong. Please try again.', 'EliteCare');
        }
      );
  }

  // Navigate back to the patient list
  goBack() {
    this.router.navigate(['patients/list']);
  }
}