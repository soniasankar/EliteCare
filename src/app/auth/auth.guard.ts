import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    // Get the current role from local storage
    const currentRole = localStorage.getItem("ACCESS_ROLE");
    const expectedRole = next.data.RoleId; // The expected role defined in route data

    // If roles do not match, redirect to login page
    if (currentRole !== expectedRole) {
      // Clear session and local storage items
      this.clearSession();
      this.router.navigate(['auth/login']);
      return false;
    }

    return true;
  }

  // Helper method to clear session and local storage
  private clearSession() {
    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");
  }
}
