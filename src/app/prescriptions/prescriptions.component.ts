



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from '../services/doctor.service';
// import { Medicine } from '../shared/medicine';
// import { AddprescriptionDto } from '../shared/addprescription-dto';
// import { MPrescriptionDto } from '../shared/mprescription-dto';
// import { Test } from '../shared/test';
// import { PatientDto } from '../shared/patient-dto';

// @Component({
//   selector: 'app-prescriptions',
//   templateUrl: './prescriptions.component.html',
//   styleUrls: ['./prescriptions.component.scss']
// })
// export class PrescriptionsComponent implements OnInit {
//   patientId: number | null = null;
//   patientName: string = '';
//   patientDOB: Date | null = null;
//   patientAge: number | null = null;

//   symptoms: string = '';
//   diagnosis: string = '';
//   doctorsNote: string = '';
//   treatment: string = '';
//   formSubmitted: boolean = false;
//   errorMessage: string | null = null;
//   successMessage: string | null = null;

//   selectedMedicines: MPrescriptionDto[] = [];
//   selectedTests: Test[] = [];
//   medicineSearchQuery: string = '';
//   testSearchQuery: string = '';
//   allMedicines: Medicine[] = [];
//   allTests: Test[] = [];
//   filteredMedicines: Medicine[] = [];
//   filteredTests: Test[] = [];
//   doctorId: number = 1; // Temporarily hard-coded
//   showAddMore: boolean = false; // Control visibility of the medicine fields

//   constructor(
//     private route: ActivatedRoute,
//     private doctorService: DoctorService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const id = params.get('patientId');
//       if (id) {
//         this.patientId = +id;
//         this.fetchPatientDetails(this.patientId);
//       }
//       this.fetchMedicines();
//       this.fetchTests();
//     });
//   }
//   goBack(): void {
//     this.router.navigate(['/auth/doctor']);
//   }
//   fetchPatientDetails(patientId: number): void {
//     this.doctorService.getPatientById(patientId).subscribe(
//       (patient: PatientDto) => {
//         this.patientName = `${patient.FirstName} ${patient.LastName}`;
//         this.patientDOB = patient.Dob ? new Date(patient.Dob) : null;
//         this.patientAge = this.calculateAge(this.patientDOB);
//       },
//       error => {
//         this.errorMessage = 'Failed to load patient details.';
//       }
//     );
//   }

//   calculateAge(dob: Date): number {
//     const today = new Date();
//     const birthDate = new Date(dob);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   }

//   fetchMedicines(): void {
//     this.doctorService.listMedicines().subscribe(medicines => {
//       this.allMedicines = medicines;
//     });
//   }

//   fetchTests(): void {
//     this.doctorService.listTests().subscribe(tests => {
//       this.allTests = tests;
//     });
//   }

//   searchMedicines(): void {
//     const query = this.medicineSearchQuery.toLowerCase();
//     this.filteredMedicines = query
//       ? this.allMedicines.filter(medicine => medicine.MedicineName.toLowerCase().includes(query))
//       : [];
//   }

//   addMedicine(medicine: Medicine): void {
//     const exists = this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
//     if (!exists) {
//       const newPrescription: MPrescriptionDto = {
//         PrescriptionId: 0,
//         MedicineId: medicine.MedicineId,
//         MedicineName: medicine.MedicineName,
//         Dosage: '',
//         Frequency: '',
//         Duration: ''
//       };
//       this.selectedMedicines.push(newPrescription);
//       this.filteredMedicines = []; // Clear the suggestions
//       this.showAddMore = true; // Show input fields when a medicine is added
//     }
//     this.medicineSearchQuery = ''; // Clear search box
//   }

//   removeMedicine(medicineId: number): void {
//     this.selectedMedicines = this.selectedMedicines.filter(m => m.MedicineId !== medicineId);
//     if (this.selectedMedicines.length === 0) {
//       this.showAddMore = false; // Hide input fields if no medicines are selected
//     }
//   }

//   toggleAddMore(): void {
//     this.showAddMore = !this.showAddMore; // Toggle visibility
//   }

//   searchTests(): void {
//     const query = this.testSearchQuery.toLowerCase();
//     this.filteredTests = query
//       ? this.allTests.filter(test => test.TestName.toLowerCase().includes(query))
//       : [];
//   }

//   addTest(test: Test): void {
//     const exists = this.selectedTests.some(t => t.TestId === test.TestId);
//     if (!exists) {
//       this.selectedTests.push(test);
//     }
//     this.testSearchQuery = ''; // Clear the input after adding
//     this.filteredTests = []; // Clear the suggestions
//   }

//   removeTest(testId: number): void {
//     this.selectedTests = this.selectedTests.filter(t => t.TestId !== testId);
//   }

//   submitPrescription(): void {
//     if (!this.patientId) {
//       this.errorMessage = 'Patient ID is not available.';
//       return;
//     }

//     const prescriptionDetails: AddprescriptionDto = {
//       patientId: this.patientId,
//       doctorId: this.doctorId,
//       diagnosis: this.diagnosis,
//       treatment: this.treatment,
//       doctorsNote: this.doctorsNote,
//       symptoms: this.symptoms,
//       prescriptions: this.selectedMedicines,
//      // tests: this.selectedTests
//      tests: this.selectedTests.map(test => ({
//       TestId: test.TestId, // Make sure this is populated
//       TestName: test.TestName,
//       TestNote: test.TestNote,
//     }))
//     };
//     console.log('Submitting Prescription Details:', prescriptionDetails);
//     this.doctorService.addPrescription(prescriptionDetails).subscribe(
//       response => {
//         this.successMessage = 'Prescription added successfully!';
//         this.formSubmitted = true;
//         this.resetForm();
//         this.router.navigate(['/auth/doctor']); // Redirect after successful submission
//       },
//       error => {
//         this.errorMessage = 'An error occurred while adding the prescription. Please try again.';
//       }
//     );
//   }

//   resetForm(): void {
//     this.symptoms = '';
//     this.diagnosis = '';
//     this.doctorsNote = '';
//     this.treatment = '';
//     this.selectedMedicines = [];
//     this.selectedTests = [];
//     this.medicineSearchQuery = '';
//     this.testSearchQuery = '';
//     this.successMessage = null;
//     this.errorMessage = null;
//     this.filteredMedicines = [];
//     this.filteredTests = [];
//     this.showAddMore = false; // Reset visibility
//   }

//   isMedicineSelected(medicine: Medicine): boolean {
//     return this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
//   }

//   isTestSelected(test: Test): boolean {
//     return this.selectedTests.some(t => t.TestId === test.TestId);
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from '../services/doctor.service';
// import { Medicine } from '../shared/medicine';
// import { AddprescriptionDto } from '../shared/addprescription-dto';
// import { MPrescriptionDto } from '../shared/mprescription-dto';
// import { Test } from '../shared/test';
// import { PatientDto } from '../shared/patient-dto';

// @Component({
//   selector: 'app-prescriptions',
//   templateUrl: './prescriptions.component.html',
//   styleUrls: ['./prescriptions.component.scss']
// })

// export class PrescriptionsComponent implements OnInit {
//   patientId: number | null = null;
//   patientName: string = '';
//   patientDOB: Date | null = null;
//   patientAge: number | null = null;

//   symptoms: string = '';
//   diagnosis: string = '';
//   doctorsNote: string = '';
//   treatment: string = '';
//   formSubmitted: boolean = false;
//   errorMessage: string | null = null;
//   successMessage: string | null = null;

//   selectedMedicines: MPrescriptionDto[] = [];
//   selectedTests: Test[] = [];
//   medicineSearchQuery: string = '';
//   testSearchQuery: string = '';
//   allMedicines: Medicine[] = [];
//   allTests: Test[] = [];
//   filteredMedicines: Medicine[] = [];
//   filteredTests: Test[] = [];
//   doctorId: number = 1; // Temporarily hard-coded
//   showAddMore: boolean = false; // Control visibility of the medicine fields


//   constructor(
//     private route: ActivatedRoute,
//     private doctorService: DoctorService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const id = params.get('patientId');
//       if (id) {
//         this.patientId = +id;
//         this.fetchPatientDetails(this.patientId);
//       }
//       this.fetchMedicines();
//       this.fetchTests();
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/auth/doctor']);
//   }

//   fetchPatientDetails(patientId: number): void {
//     this.doctorService.getPatientById(patientId).subscribe(
//       (patient: PatientDto) => {
//         this.patientName = `${patient.FirstName} ${patient.LastName}`;
//         this.patientDOB = patient.Dob ? new Date(patient.Dob) : null;
//         this.patientAge = this.calculateAge(this.patientDOB);
//       },
//       error => {
//         this.errorMessage = 'Failed to load patient details.';
//       }
//     );
//   }

//   calculateAge(dob: Date): number {
//     const today = new Date();
//     const birthDate = new Date(dob);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   }

//   fetchMedicines(): void {
//     this.doctorService.listMedicines().subscribe(medicines => {
//       this.allMedicines = medicines;
//     });
//   }

//   fetchTests(): void {
//     this.doctorService.listTests().subscribe(tests => {
//       this.allTests = tests;
//     });
//   }

//   searchMedicines(): void {
//     const query = this.medicineSearchQuery.toLowerCase();
//     this.filteredMedicines = query
//       ? this.allMedicines.filter(medicine => medicine.MedicineName.toLowerCase().includes(query))
//       : [];
//   }

//   addMedicine(medicine: Medicine): void {
//     const exists = this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
//     if (!exists) {
//       const newPrescription: MPrescriptionDto = {
//         PrescriptionId: 0,
//         MedicineId: medicine.MedicineId,
//         MedicineName: medicine.MedicineName,
//         Dosage: '',
//         Frequency: '',
//         Duration: ''
//       };
//       this.selectedMedicines.push(newPrescription);
//       this.filteredMedicines = []; // Clear the suggestions
//       this.showAddMore = true; // Show input fields when a medicine is added
//     }
//     this.medicineSearchQuery = ''; // Clear search box
//   }

//   removeMedicine(medicineId: number): void {
//     this.selectedMedicines = this.selectedMedicines.filter(m => m.MedicineId !== medicineId);
//     if (this.selectedMedicines.length === 0) {
//       this.showAddMore = false; // Hide input fields if no medicines are selected
//     }
//   }

//   toggleAddMore(): void {
//     this.showAddMore = !this.showAddMore; // Toggle visibility
//   }

//   searchTests(): void {
//     const query = this.testSearchQuery.toLowerCase();
//     this.filteredTests = query
//       ? this.allTests.filter(test => test.TestName.toLowerCase().includes(query))
//       : [];
//   }

//   addTest(test: Test): void {
//     const exists = this.selectedTests.some(t => t.TestId === test.TestId);
//     if (!exists) {
//       this.selectedTests.push(test);
//     }
//     this.testSearchQuery = ''; // Clear the input after adding
//     this.filteredTests = []; // Clear the suggestions
//   }

//   removeTest(testId: number): void {
//     this.selectedTests = this.selectedTests.filter(t => t.TestId !== testId);
//   }

//   isFormValid(): boolean {
//     return this.symptoms.trim() !== '' && this.diagnosis.trim() !== '' && this.treatment.trim() !== '';
//   }

//   submitPrescription(): void {
//     if (!this.patientId) {
//       this.errorMessage = 'Patient ID is not available.';
//       return;
//     }

//     const prescriptionDetails: AddprescriptionDto = {
//       patientId: this.patientId,
//       doctorId: this.doctorId,
//       diagnosis: this.diagnosis,
//       treatment: this.treatment,
//       doctorsNote: this.doctorsNote,
//       symptoms: this.symptoms,
//       prescriptions: this.selectedMedicines,
//       tests: this.selectedTests.map(test => ({
//         TestId: test.TestId,
//         TestName: test.TestName,
//         TestNote: test.TestNote,
//       })),
//     };

//     console.log('Submitting Prescription Details:', prescriptionDetails);
//     this.doctorService.addPrescription(prescriptionDetails).subscribe(
//       response => {
//         this.successMessage = 'Prescription added successfully!';
//         this.formSubmitted = true;
//         this.resetForm();
//         this.router.navigate(['/auth/doctor']); // Redirect after successful submission
//       },
//       error => {
//         this.errorMessage = 'An error occurred while adding the prescription. Please try again.';
//       }
//     );
//   }

//   resetForm(): void {
//     this.symptoms = '';
//     this.diagnosis = '';
//     this.doctorsNote = '';
//     this.treatment = '';
//     this.selectedMedicines = [];
//     this.selectedTests = [];
//     this.medicineSearchQuery = '';
//     this.testSearchQuery = '';
//     this.successMessage = null;
//     this.errorMessage = null;
//     this.filteredMedicines = [];
//     this.filteredTests = [];
//     this.showAddMore = false; // Reset visibility
//   }

//   isMedicineSelected(medicine: Medicine): boolean {
//     return this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
//   }

//   isTestSelected(test: Test): boolean {
//     return this.selectedTests.some(t => t.TestId === test.TestId);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Medicine } from '../shared/medicine';
import { AddprescriptionDto } from '../shared/addprescription-dto';
import { MPrescriptionDto } from '../shared/mprescription-dto';
import { Test } from '../shared/test';
import { PatientDto } from '../shared/patient-dto';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})

export class PrescriptionsComponent implements OnInit {
  patientId: number | null = null;
  patientName: string = '';
  patientDOB: Date | null = null;
  patientAge: number | null = null;

  symptoms: string = '';
  diagnosis: string = '';
  doctorsNote: string = '';
  treatment: string = '';
  formSubmitted: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  selectedMedicines: MPrescriptionDto[] = [];
  selectedTests: Test[] = [];
  medicineSearchQuery: string = '';
  testSearchQuery: string = '';
  allMedicines: Medicine[] = [];
  allTests: Test[] = [];
  filteredMedicines: Medicine[] = [];
  filteredTests: Test[] = [];
  doctorId: number = 1; // Temporarily hard-coded
  showAddMore: boolean = false; // Control visibility of the medicine fields

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('patientId');
      if (id) {
        this.patientId = +id;
        this.fetchPatientDetails(this.patientId);
      }
      this.fetchMedicines();
      this.fetchTests();
    });
  }

  goBack(): void {
    this.router.navigate(['/auth/doctor']);
  }

  fetchPatientDetails(patientId: number): void {
    this.doctorService.getPatientById(patientId).subscribe(
      (patient: PatientDto) => {
        this.patientName = `${patient.FirstName} ${patient.LastName}`;
        this.patientDOB = patient.Dob ? new Date(patient.Dob) : null;
        this.patientAge = this.calculateAge(this.patientDOB);
      },
      error => {
        this.errorMessage = 'Failed to load patient details.';
      }
    );
  }

  calculateAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  fetchMedicines(): void {
    this.doctorService.listMedicines().subscribe(medicines => {
      this.allMedicines = medicines;
    });
  }

  fetchTests(): void {
    this.doctorService.listTests().subscribe(tests => {
      this.allTests = tests;
    });
  }

  searchMedicines(): void {
    const query = this.medicineSearchQuery.toLowerCase();
    this.filteredMedicines = query
      ? this.allMedicines.filter(medicine => medicine.MedicineName.toLowerCase().includes(query))
      : [];
  }

  addMedicine(medicine: Medicine): void {
    const exists = this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
    if (!exists) {
      const newPrescription: MPrescriptionDto = {
        PrescriptionId: 0,
        MedicineId: medicine.MedicineId,
        MedicineName: medicine.MedicineName,
        Dosage: '',
        Frequency: '',
        Duration: ''
      };
      this.selectedMedicines.push(newPrescription);
      this.filteredMedicines = []; // Clear the suggestions
      this.showAddMore = true; // Show input fields when a medicine is added
    }
    this.medicineSearchQuery = ''; // Clear search box
  }

  removeMedicine(medicineId: number): void {
    this.selectedMedicines = this.selectedMedicines.filter(m => m.MedicineId !== medicineId);
    if (this.selectedMedicines.length === 0) {
      this.showAddMore = false; // Hide input fields if no medicines are selected
    }
  }

  toggleAddMore(): void {
    this.showAddMore = !this.showAddMore; // Toggle visibility
  }

  searchTests(): void {
    const query = this.testSearchQuery.toLowerCase();
    this.filteredTests = query
      ? this.allTests.filter(test => test.TestName.toLowerCase().includes(query))
      : [];
  }

  addTest(test: Test): void {
    const exists = this.selectedTests.some(t => t.TestId === test.TestId);
    if (!exists) {
      this.selectedTests.push(test);
    }
    this.testSearchQuery = ''; // Clear the input after adding
    this.filteredTests = []; // Clear the suggestions
  }

  removeTest(testId: number): void {
    this.selectedTests = this.selectedTests.filter(t => t.TestId !== testId);
  }

  isFormValid(): boolean {
    return this.symptoms.trim() !== '' && this.diagnosis.trim() !== '' && this.treatment.trim() !== '';
  }

  submitPrescription(): void {
    if (!this.patientId) {
      this.errorMessage = 'Patient ID is not available.';
      return;
    }

    const prescriptionDetails: AddprescriptionDto = {
      patientId: this.patientId,
      doctorId: this.doctorId,
      diagnosis: this.diagnosis,
      treatment: this.treatment,
      doctorsNote: this.doctorsNote,
      symptoms: this.symptoms,
      prescriptions: this.selectedMedicines,
      tests: this.selectedTests.map(test => ({
        TestId: test.TestId,
        TestName: test.TestName,
        TestNote: test.TestNote,
      })),
    };

    console.log('Submitting Prescription Details:', prescriptionDetails);
    this.doctorService.addPrescription(prescriptionDetails).subscribe(
      response => {
        // Show SweetAlert success message
        Swal.fire({
          title: 'Success!',
          text: 'Prescription added successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.formSubmitted = true;
          this.resetForm();
          this.router.navigate(['/auth/doctor']); // Redirect after successful submission
        });
      },
      error => {
        this.errorMessage = 'An error occurred while adding the prescription. Please try again.';
      }
    );
  }

  resetForm(): void {
    this.symptoms = '';
    this.diagnosis = '';
    this.doctorsNote = '';
    this.treatment = '';
    this.selectedMedicines = [];
    this.selectedTests = [];
    this.medicineSearchQuery = '';
    this.testSearchQuery = '';
    this.successMessage = null;
    this.errorMessage = null;
    this.filteredMedicines = [];
    this.filteredTests = [];
    this.showAddMore = false; // Reset visibility
  }

  isMedicineSelected(medicine: Medicine): boolean {
    return this.selectedMedicines.some(m => m.MedicineId === medicine.MedicineId);
  }

  isTestSelected(test: Test): boolean {
    return this.selectedTests.some(t => t.TestId === test.TestId);
  }
}
