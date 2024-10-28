import { MPrescriptionDto } from "./mprescription-dto";
import { Test } from "./test";

export class AddprescriptionDto {
  
    patientId: number;
    doctorId: number;
    diagnosis: string;
    treatment: string;
    doctorsNote : string;
    symptoms:string;
    prescriptions: MPrescriptionDto[];
    tests?: Test[]; 
}