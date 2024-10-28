export class MedicalRecordDto {
    RecordId: number;
    Diagnosis: string;
    Treatment: string;
    DoctorName: string;
    Date: Date; // You may also use string if you're working with date strings
}
