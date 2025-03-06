import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: { id: number; name: string; price: number }) {
    this.cartService.addItem(product);
  }
  
}
