import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent implements OnInit {
  profileForm!: FormGroup;
  firstName = signal('');
  lastName = signal('');
  // Update signals when form controls change
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: '',
      lastName: ''
    });

    this.profileForm.get('firstName')!.valueChanges.subscribe(value => this.firstName.set(value));
    this.profileForm.get('lastName')!.valueChanges.subscribe(value => this.lastName.set(value));

    // Create signals from form controls
    this.firstName = signal(this.profileForm.get('firstName')!.value);
    this.lastName = signal(this.profileForm.get('lastName')!.value);
  }

  // Computed signal for full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

}
