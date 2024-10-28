import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Prescription } from "./prescription";

export class MedicalRecord {
    RecordId: number;
    PatientId?: number;
    DoctorId?: number;
    Diagnosis?: string;
    Treatment?: string;

    Doctor?: Doctor; // Assuming Doctor is another class
    Patient?: Patient; // Assuming Patient is another class
    Prescriptions: Prescription[]; // Assuming Prescription is another class

    constructor() {
        this.RecordId = 0; // Default value, adjust as needed
        this.Prescriptions = []; // Initialize as an empty array
    }
}
