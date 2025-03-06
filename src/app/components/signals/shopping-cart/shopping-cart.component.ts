import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CommonModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  constructor(public cartService: CartService) {}

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
  
}
