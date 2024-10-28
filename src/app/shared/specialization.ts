import { Doctor } from "./doctor";
import { Staff } from "./staff";

export class Specialization {
    SpecializationId: number;
    SpecializationName: string;

    Doctors: Doctor[]; // Assuming Doctor is another class
    Staff: Staff[]; // Assuming Staff is another class

    constructor() {
        this.SpecializationId = 0; // Default value, adjust as needed
        this.SpecializationName = ''; // Default value, adjust as needed
        this.Doctors = []; // Initialize as an empty array
        this.Staff = []; // Initialize as an empty array
    }
}
