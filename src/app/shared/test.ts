import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Prescription } from "./prescription";

export class Test {
    TestId: number;
    PatientId?: number; // Nullable patient identifier
    DoctorId?: number; // Nullable doctor identifier
    TestName?: string; // Nullable test name
    TestDate?: Date; // Nullable test date
    Result?: string; // Nullable result
    TestNote?:string;

    Doctor?: Doctor; // Assuming Doctor is another class
    Patient?: Patient; // Assuming Patient is another class
    Prescriptions?: Prescription[]; // Assuming Prescription is another class
   
    constructor() {
        this.TestId = 0; // Default value, adjust as needed
        this.Prescriptions = []; // Initialize as an empty array
    }
}
