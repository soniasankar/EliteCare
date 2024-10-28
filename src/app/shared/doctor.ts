import { Appointment } from "./appointment";
import { MedicalRecord } from "./medical-record";
import { Prescription } from "./prescription";
import { Specialization } from "./specialization";
import { Staff } from "./staff";
import { Test } from "./test";
import { TimeSlot } from "./time-slot";

export class Doctor {
    DoctorId: number;
    StaffId?: number;
    ConsultationFee: number;
    SpecializationId?: number;

    Appointments: Appointment[]; // Assuming Appointment is another class
    MedicalRecords: MedicalRecord[]; // Assuming MedicalRecord is another class
    Prescriptions: Prescription[]; // Assuming Prescription is another class
    Specialization?: Specialization; // Assuming Specialization is another class
    Staff?: Staff; // Assuming Staff is another class
    Tests: Test[]; // Assuming Test is another class
    TimeSlots: TimeSlot[]; // Assuming TimeSlot is another class

    constructor() {
        this.DoctorId = 0; // Default value, adjust as needed
        this.ConsultationFee = 0; // Default value, adjust as needed
        this.Appointments = []; // Initialize as an empty array
        this.MedicalRecords = []; // Initialize as an empty array
        this.Prescriptions = []; // Initialize as an empty array
        this.Tests = []; // Initialize as an empty array
        this.TimeSlots = []; // Initialize as an empty array
    }
}
