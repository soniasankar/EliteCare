import { Prescription } from "./prescription";

export class Medicine {
    MedicineId: number;
    MedicineName: string;
    DosageForm: string;
    Strength: string;
    Manufacturer: string;

    Prescriptions: Prescription[]; // Assuming Prescription is another class

    constructor() {
        this.MedicineId = 0; // Default value, adjust as needed
        this.MedicineName = ''; // Default value, adjust as needed
        this.DosageForm = ''; // Default value, adjust as needed
        this.Strength = ''; // Default value, adjust as needed
        this.Manufacturer = ''; // Default value, adjust as needed
        this.Prescriptions = []; // Initialize as an empty array
    }
}
