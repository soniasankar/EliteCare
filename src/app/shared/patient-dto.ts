export class PatientDto {
    PatientId: number;
    FirstName: string;
    LastName: string;
    Dob?: Date; // Assuming it's formatted as a string
    Gender: string;
    PhoneNumber: string;
    Email: string;
    IsActive: boolean; 
}
