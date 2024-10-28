export class MedicineDto {
    MedicineId: number;
    MedicineName: string;
    Manufacturer: string;
    DosageForm: string;
    Strength: string;
    Price: number; // TypeScript uses `number` for decimal values
    IsActive: boolean; // Indicates if the medicine is currently available
    Frequency: string;
}
