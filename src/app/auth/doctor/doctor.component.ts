
// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { DoctorService } from 'src/app/services/doctor.service';
// import { AppointmentDto } from 'src/app/shared/appointment-dto';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-doctor',
//   templateUrl: './doctor.component.html',
//   styleUrls: ['./doctor.component.scss']
// })
// export class DoctorComponent implements OnInit {
//   appointments: AppointmentDto[] = [];
//   filteredAppointments: AppointmentDto[] = [];
//   searchTerm: string = '';
//   doctorId: number = 1;

//   constructor(
//     private doctorService: DoctorService, 
//     private router: Router, 
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     this.getAppointments();
//   }

//   getAppointments(): void {
//     this.doctorService.getDoctorAppointments(this.doctorId).subscribe(
//       (data: AppointmentDto[]) => {
//         this.appointments = data;
//         this.filteredAppointments = data; // Initialize filteredAppointments
//       },
//       (error) => {
//         console.error('Error fetching appointments', error);
//       }
//     );
//   }

//   filterAppointments(): void {
//     const term = this.searchTerm.trim().toLowerCase();

//     // Check if the term is a number
//     const isNumber = !isNaN(+term) && term !== '';

//     this.filteredAppointments = this.appointments.filter(appointment => {
//       const patientNameMatch = appointment.PatientName.toLowerCase().includes(term);
//       const patientIdMatch = isNumber ? appointment.PatientId === +term : false; // Convert term to number if it's a number

//       return patientNameMatch || patientIdMatch;
//     });
    
//     // If no matches found, reset to original appointments
//     if (this.filteredAppointments.length === 0) {
//         this.filteredAppointments = this.appointments;
//     }
//   }
// }

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { AppointmentDto } from 'src/app/shared/appointment-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  appointments: AppointmentDto[] = [];
  filteredAppointments: AppointmentDto[] = [];
  paginatedAppointments: AppointmentDto[] = [];
  searchTerm: string = '';
  doctorId: number = 1;

  currentPage: number = 1;
  itemsPerPage: number = 6; // Number of items per page
  totalPages: number = 0;

  constructor(
    private doctorService: DoctorService, 
    private router: Router, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.doctorService.getDoctorAppointments(this.doctorId).subscribe(
      (data: AppointmentDto[]) => {
        this.appointments = data;
        this.filteredAppointments = data; // Initialize filteredAppointments
        this.calculateTotalPages();
        this.updatePaginatedAppointments();
      },
      (error) => {
        console.error('Error fetching appointments', error);
      }
    );
  }

  filterAppointments(): void {
    const term = this.searchTerm.trim().toLowerCase();
    const isNumber = !isNaN(+term) && term !== '';

    this.filteredAppointments = this.appointments.filter(appointment => {
      const patientNameMatch = appointment.PatientName.toLowerCase().includes(term);
      const patientIdMatch = isNumber ? appointment.PatientId === +term : false;

      return patientNameMatch || patientIdMatch;
    });

    this.currentPage = 1; // Reset to the first page on search
    this.calculateTotalPages();
    this.updatePaginatedAppointments();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredAppointments.length / this.itemsPerPage);
  }

  updatePaginatedAppointments(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedAppointments = this.filteredAppointments.slice(start, end);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Ensure valid page number
    this.currentPage = page;
    this.updatePaginatedAppointments();
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
