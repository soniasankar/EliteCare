import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})


  export class ReceptionistComponent {
    constructor(private router: Router, private authService: AuthService) {}
  
    logout(): void {
      this.authService.logOutRemoveItems(); // Call your logout logic here (e.g., clear tokens)
      this.router.navigate(['auth/home']); // Redirect to home
    }
  }
