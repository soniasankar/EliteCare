import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logOutRemoveItems(); // Call your logout logic here (e.g., clear tokens)
    this.router.navigate(['auth/home']); // Redirect to home
  }
}
