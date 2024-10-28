import { MPrescriptionDto } from "./mprescription-dto";

export class AddMultipleMedicinesDto {
    prescriptionId: number; // The ID of the prescription to which these medicines will be added
    medicines: MPrescriptionDto[];
}
