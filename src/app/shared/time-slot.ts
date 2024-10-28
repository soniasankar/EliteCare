export class TimeSlot {
    timeSlotId: number; // Required field, corresponds to TimeSlotId
    doctorId?: number;   // Optional field, corresponds to DoctorId
    startTime: Date;     // Required field, corresponds to StartTime
    endTime: Date;       // Required field, corresponds to EndTime
    isBooked?: boolean;  // Optional field, corresponds to IsBooked
   
  }
  