import { MPrescriptionDto } from "./mprescription-dto";

export class AMedicalRecordPrescriptionDto {
    recordId: number;
    patientId: number;
    doctorId: number;
    diagnosis: string;
    treatment: string;
    prescriptions: MPrescriptionDto[];

    constructor(
        recordId: number,
        patientId: number,
        doctorId: number,
        diagnosis: string,
        treatment: string,
        prescriptions: MPrescriptionDto[] = []
    ) {
        this.recordId = recordId;
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.prescriptions = prescriptions;
    }

    addPrescription(prescription: MPrescriptionDto) {
        this.prescriptions.push(prescription);
    }
}

