import { MPrescriptionDto } from "./mprescription-dto";

export class MedicalRecordPrescriptionDto {
    RecordId: number;
    PatientId: number;
    DoctorId: number;
    Diagnosis: string;
    Treatment: string;
    DoctorsNote : string;
    Symptoms:string;
     
    Prescriptions: MPrescriptionDto[];
}
