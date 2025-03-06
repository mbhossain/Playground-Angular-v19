import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {
  // Signal to hold the live data
  private liveData = signal<number>(0);

  constructor() {
    // Simulate real-time data updates
    setInterval(() => {
      const newData = Math.floor(Math.random() * 100); // Replace with real data source
      this.liveData.set(newData);
    }, 1000);
  }

  // Read-only signal for components to consume
  get data() {
    return this.liveData.asReadonly();
  }
  
}
