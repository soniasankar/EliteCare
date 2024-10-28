import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDetails } from 'src/app/shared/appointmentdetails';
import { PatientService } from 'src/app/services/patient.service';
import { environment } from 'src/environments/environment';
import html2pdf from 'html2pdf.js'; 

@Component({
  selector: 'app-printbill',
  templateUrl: './printbill.component.html',
  styleUrls: ['./printbill.component.scss']
})
export class PrintbillComponent implements OnInit {
  lastAppointmentDetails: AppointmentDetails | null = null;
  isLoading: boolean = true; 
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private PatientService: PatientService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchLastAppointmentDetails();
  }

  fetchLastAppointmentDetails(): void {
   // const url = `${environment.apiUrl}/api/Receptionists/last-appointment`;
    //console.log('Fetching last appointment details from:', url);

    this.PatientService.getLastAppointmentDetails().subscribe(
      (details) => {debugger
        this.lastAppointmentDetails = details;
        this.isLoading = false; 
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.error('Error fetching last appointment details:', error);
        this.errorMessage = 'Failed to load appointment details.'; 
        this.isLoading = false; // Stop loading on error
      }
    );
  }

  printReceipt(): void {
    const element = document.getElementById('receipt'); // Get the receipt element
    if (element) {
      const options = {
        margin: 1,
        filename: 'receipt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // Use html2pdf to convert the element to PDF
      html2pdf()
        .from(element)
        .set(options)
        .save()
        .then(() => {
          console.log('PDF generated successfully');
        })
        .catch((error) => {
          console.error('Error generating PDF:', error);
        });
    } else {
      console.error('Element with ID "receipt" not found.');
    }
  }

  // Method to navigate back to the patient list
  goBack(): void {
    this.router.navigate(['/patients/list']); 
  }
}
