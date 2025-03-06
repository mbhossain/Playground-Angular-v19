import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-item-details',
  imports: [
    CommonModule
    , HttpClientModule
  ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items as needed
  ];

  // Signal to hold the selected item ID
  selectedItemId = signal<number | null>(null);

  // Signal to hold the fetched item details
  itemDetails = signal<any>(null);

  constructor(private http: HttpClient) {
    // Effect to fetch item details whenever the selected item ID changes
    effect(() => {
      const id = this.selectedItemId();
      if (id !== null) {
        this.fetchItemDetails(id);
      }
    });
  }

  // Method to update the selected item ID
  selectItem(e: any) {
    const inputElement = e.target as HTMLInputElement;
    const value = +(inputElement.value);
    this.selectedItemId.set(value);
  }

  // Method to fetch item details from an API
  fetchItemDetails(id: number) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(data => {
      this.itemDetails.set(data);
    });
  }
}
