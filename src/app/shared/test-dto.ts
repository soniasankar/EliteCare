export class TestDto {
    TestId: number;
    TestName: string;
    Result: string;
    TestDate: string; // Consider using a Date type if needed
    PatientId?: number; // Optional property
    DoctorId?: number;
    TestNote?:string;

}
