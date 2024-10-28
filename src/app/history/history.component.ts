// import { Component, OnInit } from '@angular/core';

// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from '../services/doctor.service';
// // import { MedicalRecordDto } from '../shared/medical-record-dto';
// import { MedicalRecordPrescriptionDto } from '../shared/medical-record-prescription-dto';

// @Component({
//   selector: 'app-history',
//   templateUrl: './history.component.html',
//   styleUrls: ['./history.component.scss']
// })
// export class HistoryComponent implements OnInit {
//   patientId: number | null = null;
//   medicalRecords: MedicalRecordPrescriptionDto[] = [];
//   errorMessage: string | null = null;

//   constructor(private route: ActivatedRoute, private historyService: DoctorService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const id = params.get('patientId');
//       if (id) {
//         this.patientId = +id;
//         this.fetchPatientHistory(this.patientId);
//       }
//     });
//   }
//   goBack(): void {
//     this.router.navigate(['/auth/doctor']);
//   }
//   // fetchPatientHistory(patientId: number): void {
//   //   this.historyService.getPatientHistory(patientId).subscribe(
//   //     records => {
//   //       this.medicalRecords = records;
//   //     },
//   //     error => {
//   //       this.errorMessage = 'Failed to load patient history.';
//   //     }
//   //   );
//   // }
//   fetchPatientHistory(patientId: number): void {
//     this.historyService.getPatientHistory(patientId).subscribe(
//       records => {
//         console.log(records); // Check what records are returned
//         this.medicalRecords = records;
//       },
//       error => {
//         this.errorMessage = 'Failed to load patient history.';
//       }
//     );
//   }
  
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { MedicalRecordPrescriptionDto } from '../shared/medical-record-prescription-dto';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  patientId: number | null = null;
  medicalRecords: MedicalRecordPrescriptionDto[] = [];
  paginatedRecords: MedicalRecordPrescriptionDto[] = [];
  currentPage: number = 1;
  recordsPerPage: number = 5;
  totalPages: number = 0;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private historyService: DoctorService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('patientId');
      if (id) {
        this.patientId = +id;
        this.fetchPatientHistory(this.patientId);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/auth/doctor']);
  }

  fetchPatientHistory(patientId: number): void {
    this.historyService.getPatientHistory(patientId).subscribe(
      records => {
        this.medicalRecords = records;
        this.totalPages = Math.ceil(this.medicalRecords.length / this.recordsPerPage);
        this.paginateRecords();
      },
      error => {
        this.errorMessage = 'Failed to load patient history.';
      }
    );
  }

  paginateRecords(): void {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    this.paginatedRecords = this.medicalRecords.slice(startIndex, startIndex + this.recordsPerPage);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginateRecords();
  }
}
