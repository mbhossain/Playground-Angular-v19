import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Signal to hold the authentication status
  private isAuthenticated = signal<boolean>(false);

  // Method to log in the user
  login() {
    // Perform login logic here
    this.isAuthenticated.set(true);
  }

  // Method to log out the user
  logout() {
    // Perform logout logic here
    this.isAuthenticated.set(false);
  }

  // Read-only signal for components to consume
  get authStatus() {
    return this.isAuthenticated.asReadonly();
  }
  
}
