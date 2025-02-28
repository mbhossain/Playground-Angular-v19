import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileFormComponent } from './components/signals/profile-form/profile-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-v19';
}
