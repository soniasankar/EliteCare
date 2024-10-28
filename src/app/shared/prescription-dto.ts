import { MedicineDto } from "./medicine-dto";
import { TestDto } from "./test-dto";

export class PrescriptionDto {
    PatientId: number;
    Medicines: MedicineDto[];
    Tests: TestDto[];
    Dosage: string;
    Frequency: string;
    Duration:string;
}
