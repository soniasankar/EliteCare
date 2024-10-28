import { Login } from "./login";
import { Staff } from "./staff";

export class Role {
    RoleId: number;
    RoleName: string;

    Logins: Login[]; // Assuming Login is another class
    Staff: Staff[]; // Assuming Staff is another class

    constructor() {
        this.RoleId = 0; // Default value, adjust as needed
        this.RoleName = ''; // Default value, adjust as needed
        this.Logins = []; // Initialize as an empty array
        this.Staff = []; // Initialize as an empty array
    }
}
