import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileFormComponent } from './components/signals/profile-form/profile-form.component';
import { ThemeToggleComponent } from './components/signals/theme-toggle/theme-toggle.component';
import { ProductListComponent } from './components/signals/product-list/product-list.component';
import { ShoppingCartComponent } from './components/signals/shopping-cart/shopping-cart.component';
import { ItemDetailsComponent } from './components/signals/item-details/item-details.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    // , ProfileFormComponent
    // , ThemeToggleComponent
    // ProductListComponent
    // , ShoppingCartComponent
    ItemDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-v19';
}
