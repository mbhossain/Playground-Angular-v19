export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Notification {
    id: number;
    message: string;
    read: boolean;
}