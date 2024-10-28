export class AMPrescriptionDto {

    prescriptionId: number;
    medicineId?: number; // Optional
    dosage: string;
    frequency: string;
    testId?: number; // Optional

    constructor(
        prescriptionId: number,
        dosage: string,
        frequency: string,
        medicineId?: number,
        testId?: number
    ) {
        this.prescriptionId = prescriptionId;
        this.dosage = dosage;
        this.frequency = frequency;
        this.medicineId = medicineId;
        this.testId = testId;
    }
}

