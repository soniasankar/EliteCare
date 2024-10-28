export class MPrescriptionDto {
    PrescriptionId: number;
    MedicineId?: number; // Optional property
    Dosage: string;
    Frequency: string;
    Duration:string;
    TestId?: number; 
    MedicineName?: string; 
}
