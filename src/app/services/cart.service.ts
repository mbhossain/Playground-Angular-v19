import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Signal to hold the list of cart items
  private items = signal<CartItem[]>([]);

  // Computed signal to calculate the total price
  totalPrice = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0)
  );

  // Method to add an item to the cart
  addItem(product: Product, quantity: number = 1) {
    this.items.update(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      if (existingItem) {
        // Update quantity if product already exists in the cart
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new product to the cart
        return [...currentItems, { product, quantity }];
      }
    });
  }

  // Method to remove an item from the cart
  removeItem(productId: number) {
    this.items.update(currentItems =>
      currentItems.filter(item => item.product.id !== productId)
    );
  }

  // Method to clear the cart
  clearCart() {
    this.items.set([]);
  }

  // Read-only signal for components to consume
  get cartItems() {
    return this.items.asReadonly();
  }

}
