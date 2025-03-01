import { Component, computed } from '@angular/core';
import { ThemeServiceService } from '../../../services/theme-service.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeServiceService) { }

  // Compute the next theme based on the current theme
  nextTheme = computed(() =>
    this.themeService.currentTheme() === 'light' ? 'dark' : 'light'
  );

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
