import { Staff } from "./staff";

export class Receptionist {
    ReceptionistId: number;
    StaffId?: number;
    Shift: string;
    IsActive?: boolean; // Nullable boolean for active status

    Staff?: Staff; // Assuming Staff is another class

    constructor() {
        this.ReceptionistId = 0; // Default value, adjust as needed
        this.Shift = ''; // Default value, adjust as needed
    }
}

