import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/login'; // Import the Login class
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  // Verify Username and Password using Login class
  public loginVerify(login: Login): Observable<any> {
    // Call WebAPI for checking Username and Password
    // Ensure your backend API matches this endpoint
    return this.httpClient.get<Login>(`${environment.apiUrl}Logins/${login.Username}/${login.PasswordHash}`);
  }

  public logOutRemoveItems() {
    // Clear all session and local storage keys
    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");

    // Redirect to Login
    this.router.navigate(['auth/login']);
  }
}
