import { Doctor } from "./doctor";
import { Login } from "./login";
import { Patient } from "./patient";
import { TimeSlot } from "./time-slot";

export class Appointment {
    AppointmentId: number;
    PatientId?: number;
    DoctorId?: number;
    TokenNumber: number;
    ConsultationStatus?: boolean;
    DateAndTime?: Date;
    AppointmentDate?: Date;
    TimeSlotId?: number;
    StaffId?: number;
    RegistrationFee?: number;
    ConsultationFee?: number;
    TotalAmount?: number;
    IsActive?: boolean;

    Doctor?: Doctor; // Assuming Doctor is another class
    Patient?: Patient; // Assuming Patient is another class
    Staff?: Login; // Assuming Login is another class
    TimeSlot?: TimeSlot; // Assuming TimeSlot is another class

    constructor() {
        this.AppointmentId = 0; // Default value, adjust as needed
        this.TokenNumber = 0; // Default value, adjust as needed
        this.IsActive = true; // Default value, adjust as needed
    }
}