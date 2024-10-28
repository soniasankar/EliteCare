export class AppointmentDetails {
    appointmentId: number = 0;              // Unique identifier for the appointment
    patientId: number = 0;                   // ID of the patient
    patientName: string = '';                 // Full name of the patient
    doctorId: number = 0;                    // ID of the doctor
    email: string = '';                       // Patient's email
    phoneNumber: string = '';                 // Patient's phone number
    doctorName: string = '';                  // Name of the doctor
    specializationName: string = '';          // Specialization of the doctor
    timeSlot: string = '';                    // Time slot for the appointment
    appointmentDate?: Date;                   // Date of the appointment (optional)
    dateAndTime?: Date;                       // Date and time of the appointment (optional)
    registrationFee: number = 0;             // Registration fee for the appointment
    consultationFee: number = 0;             // Consultation fee for the appointment
    totalAmount: number = 0;                 // Total amount for the appointment
    tokenNumber: number = 0;          // Token number for the appointment
}
