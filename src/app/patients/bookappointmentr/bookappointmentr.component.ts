import { Component, OnInit } from '@angular/core';
import { DoctorR } from 'src/app/shared/doctor-r';
import { SpecializationR } from 'src/app/shared/specialization-r';
import { PatientService } from 'src/app/services/patient.service';
import { BookAppointment } from 'src/app/shared/book-appointment';
import { Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookappointmentr',
  templateUrl: './bookappointmentr.component.html',
  styleUrls: ['./bookappointmentr.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  specializations: SpecializationR[] = [];
  doctors: DoctorR[] = [];
  selectedSpecializationId: number = 0;
  selectedDoctorId: number = 0;
  appointmentDate: Date = new Date(); // Initialize as Date object
  availableTimeSlots: string[] = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  filteredTimeSlots: string[] = [];
  selectedTimeSlot: string = '';

  patientId: number = 0; // Assuming it will be set through a patient selection process
  appointment: BookAppointment = new BookAppointment();

  appointmentScheduled: boolean = false; // For success message
  errorMessage: string | null = null; // For error message

  constructor(private patientService: PatientService,private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {

    // Get patientId from the URL
    this.route.params.subscribe(params => {
      this.patientId = +params['id']; // Convert string to number
      console.log('Patient ID from URL:', this.patientId); // Log for debugging
    });
    // Load specializations on initialization
    this.loadSpecializations();

  }

  loadSpecializations(): void {
    this.patientService.getSpecializations().subscribe(
      (data: any[]) => {
        console.log('Specializations loaded:', data); // Debugging

        this.specializations = data.map(specialization => ({
          specializationId: specialization.SpecializationId,
          SpecializationName: specialization.SpecializationName // Ensure correct field mapping
        }));
        console.log('Loaded specializations:', this.specializations);

      },
      (error) => {
        console.log('Error loading specializations:', error);
      }
    );
  }

  // Load doctors based on selected specialization
  onSpecializationChange(specializationId: number): void {
    console.log('Selected Specialization ID:', specializationId); // Debugging

    this.selectedSpecializationId = specializationId;

    // Fetch doctors based on the selected specialization
    this.patientService.getDoctorsBySpecialization(specializationId).subscribe(
      (data: any[]) => { // Assuming the response is an array of objects
        // Map the received data to DoctorR objects
        this.doctors = data.map(doctor => ({
          doctorId: doctor.DoctorId, // Ensure correct field mapping
          doctorName: doctor.DoctorName, // Ensure correct field mapping
         // Include any other necessary fields
          // Add additional fields as needed from the API response
        }));
        console.log('Doctors loaded:', this.doctors); // Debugging: Log doctors data
      },
      (error) => {
        console.log('Error loading doctors:', error);
      }
    );
  }

// Show all available time slots without filtering
filterTimeSlots(): void {
  // Set filtered time slots to available time slots directly
  this.filteredTimeSlots = this.availableTimeSlots;

  // If the filtered time slots have options, set the selectedTimeSlot to the first one
  if (this.filteredTimeSlots.length > 0) {
    this.selectedTimeSlot = this.filteredTimeSlots[0]; // Automatically select the first available time slot
  } else {
    this.selectedTimeSlot = ''; // Clear the selection if no time slots are available
  }

  // Log the selected time slot for debugging
  console.log('Selected Time Slot after filtering:', this.selectedTimeSlot);

}
onAppointmentDateChange(): void {
  this.filterTimeSlots();
  // Update the appointmentDate with the selected date
  console.log('Selected Appointment Date:', this.appointmentDate);
  
 
  
}


scheduleAppointment(): void {
  this.appointmentScheduled = false;
  this.errorMessage = null;

  // Debugging: Check values before validation
  console.log('Appointment Date:', this.appointmentDate);
  console.log('Selected Doctor ID:', this.selectedDoctorId);
  console.log('Patient ID:', this.patientId);
  console.log('Time Slot: ', this.selectedTimeSlot); // Change this line to use selectedTimeSlot

  // Validate inputs
  if (!this.appointmentDate || !this.selectedDoctorId || !this.selectedTimeSlot || this.patientId === 0) {
    this.errorMessage = 'Please select all required fields.';
    return;
  }

  // Prepare the appointment request
  const bookappointment:BookAppointment = {
    doctorId: this.selectedDoctorId,
    patientId: this.patientId, // Ensure this is set properly
    appointmentDate: this.appointmentDate,  // Convert to Date object here
    timeSlotId: null
  };

  // Log for debugging
  console.log('Scheduling appointment:'+ bookappointment);

  // Call the service to schedule the appointment
  this.patientService.scheduleAppointment(bookappointment).subscribe(
    response => {
      console.log('Appointment scheduled successfully:', response);
      this.appointmentScheduled = true; 
      this.navigateToPrintBill();// Show success message
    },
    error => {
      console.error('Error scheduling appointment:', error);
      this.errorMessage = 'There was an error scheduling the appointment. Please try again.';
    }
  );
}
navigateToPrintBill(): void { 
  this.router.navigate(['patients/bill']);
}
}