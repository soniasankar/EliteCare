import { Appointment } from "./appointment";
import { MedicalRecord } from "./medical-record";
import { Prescription } from "./prescription";
import { Test } from "./test";

export class Patient {
    PatientId: number;
    FirstName: string;
    LastName: string;
    Dob?: Date; // Nullable date of birth
    Gender: string;
    BloodGroup: string;
    PhoneNumber: string;
    Address: string;
    Email: string;
    IsActive?: boolean; // Nullable boolean for active status
    RegisterDate?: Date; // Nullable registration date

    Appointments: Appointment[]; // Assuming Appointment is another class
    MedicalRecords: MedicalRecord[]; // Assuming MedicalRecord is another class
    Prescriptions: Prescription[]; // Assuming Prescription is another class
    Tests: Test[]; // Assuming Test is another class

    constructor() {
        this.PatientId = 0; // Default value, adjust as needed
        this.FirstName = ''; // Default value, adjust as needed
        this.LastName = ''; // Default value, adjust as needed
        this.Gender = ''; // Default value, adjust as needed
        this.BloodGroup = ''; // Default value, adjust as needed
        this.PhoneNumber = ''; // Default value, adjust as needed
        this.Address = ''; // Default value, adjust as needed
        this.Email = ''; // Default value, adjust as needed
        this.Appointments = []; // Initialize as an empty array
        this.MedicalRecords = []; // Initialize as an empty array
        this.Prescriptions = []; // Initialize as an empty array
        this.Tests = []; // Initialize as an empty array
    }
}
