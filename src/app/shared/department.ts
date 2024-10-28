import { Staff } from "./staff";

export class Department {
    DepartmentId: number;
    DepartmentName: string;
    Staff: Staff[]; // Assuming Staff is another class

    constructor() {
        this.DepartmentId = 0; // Default value, adjust as needed
        this.DepartmentName = ''; // Default value, adjust as needed
        this.Staff = [];
    }
}
