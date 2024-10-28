import { Doctor } from "./doctor";
import { MedicalRecord } from "./medical-record";
import { Medicine } from "./medicine";
import { Patient } from "./patient";
import { Test } from "./test";

export class Prescription {
    PrescriptionId: number;
    PatientId?: number;
    DoctorId?: number;
    MedicineId?: number;
    Dosage?: string;
    Frequency?: string;
    RecordId?: number;
    TestId?: number;
    Duration?: string;

    Doctor?: Doctor; // Assuming Doctor is another class
    Medicine?: Medicine; // Assuming Medicine is another class
    Patient?: Patient; // Assuming Patient is another class
    Record?: MedicalRecord; // Assuming MedicalRecord is another class
    Test?: Test; // Assuming Test is another class

    constructor() {
        this.PrescriptionId = 0; // Default value, adjust as needed
    }
}
