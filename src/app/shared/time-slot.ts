import { Appointment } from "./appointment";
import { Doctor } from "./doctor";

export class TimeSlot {
    TimeSlotId: number;
    DoctorId?: number; // Nullable doctor identifier
    StartTime: Date; // Start time of the time slot
    EndTime: Date; // End time of the time slot
    IsBooked?: boolean; // Nullable boolean indicating if the slot is booked

    Appointments: Appointment[]; // Assuming Appointment is another class
    Doctor?: Doctor; // Assuming Doctor is another class

    constructor() {
        this.TimeSlotId = 0; // Default value, adjust as needed
        this.StartTime = new Date(); // Default to current date, adjust as needed
        this.EndTime = new Date(); // Default to current date, adjust as needed
        this.Appointments = []; // Initialize as an empty array
}
}
