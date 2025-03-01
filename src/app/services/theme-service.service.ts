import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  // Signal to hold the current theme
  private theme = signal<'light' | 'dark'>('light');

  // Method to toggle the theme
  toggleTheme() {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
    this.updateBodyClass();
  }

  // Read-only signal for components to consume
  get currentTheme() {
    return this.theme.asReadonly();
  }

  // Update the body's class based on the current theme
  private updateBodyClass() {
    const isDarkTheme = this.theme() === 'dark';
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

}
