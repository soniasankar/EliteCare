export class Patient {

    PatientId: number = 0;
  FirstName: string = '';
  LastName: string = '';
  Dob: Date | null = null; // Nullable DateTime
  Gender: string = '';
  BloodGroup: string = '';
  PhoneNumber: string = '';
  Address: string = '';
  Email: string = '';
  IsActive: boolean = false; // Nullable bool in C# mapped to boolean in TypeScript
  RegisterDate: Date | null = null; // Nullable DateTime

}
