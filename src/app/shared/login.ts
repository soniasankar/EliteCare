import { Appointment } from "./appointment";

import { Role } from "./role";
import { Staff } from "./staff";

export class Login {
    LoginId: number;
    StaffId?: number; // Nullable staff identifier
    Username: string;
    PasswordHash: string; // Password should be hashed
    RoleId?: number; // Nullable role identifier

    Appointments: Appointment[]; // Assuming Appointment is another class
    Role?: Role; // Assuming Role is another class
    Staff?: Staff; // Assuming Staff is another class

    constructor() {
        this.LoginId = 0; // Default value, adjust as needed
        this.Username = ''; // Default value, adjust as needed
        this.PasswordHash = ''; // Default value, adjust as needed
        this.Appointments = []; // Initialize as an empty array
    }
}