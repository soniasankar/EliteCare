import { Department } from "./department";
import { Doctor } from "./doctor";
import { Login } from "./login";
import { Receptionist } from "./receptionist";
import { Role } from "./role";
import { Specialization } from "./specialization";

export class Staff {
    StaffId: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    DateOfBirth: Date; // Use Date for compatibility
    BloodGroup?: string;
    JoiningDate?: Date; // Nullable date for joining
    Salary: number;
    Experience: number;
    PhoneNumber: string;
    Email: string;
    Qualification?: string;
    Address?: string;
    IsActive?: boolean; // Nullable boolean for active status
    DepartmentId?: number; // Nullable department identifier
    SpecializationId?: number; // Nullable specialization identifier
    RoleId?: number; // Nullable role identifier

    Department?: Department; // Assuming Department is another class
    Doctors: Doctor[]; // Assuming Doctor is another class
    Logins: Login[]; // Assuming Login is another class
    Receptionists: Receptionist[]; // Assuming Receptionist is another class
    Role?: Role; // Assuming Role is another class
    Specialization?: Specialization; // Assuming Specialization is another class

    constructor() {
        this.StaffId = 0; // Default value, adjust as needed
        this.FirstName = ''; // Default value, adjust as needed
        this.LastName = ''; // Default value, adjust as needed
        this.Gender = ''; // Default value, adjust as needed
        this.DateOfBirth = new Date(); // Default to current date, adjust as needed
        this.Salary = 0; // Default value, adjust as needed
        this.Experience = 0; // Default value, adjust as needed
        this.PhoneNumber = ''; // Default value, adjust as needed
        this.Email = ''; // Default value, adjust as needed
        this.Doctors = []; // Initialize as an empty array
        this.Logins = []; // Initialize as an empty array
        this.Receptionists = []; // Initialize as an empty array
    }
}
