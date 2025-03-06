import { Injectable, signal } from '@angular/core';
import { Notification } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Signal to hold the list of notifications
  private notifications = signal<Notification[]>([]);

  // Method to add a new notification
  addNotification(message: string) {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      read: false
    };
    this.notifications.update(current => [...current, newNotification]);
  }

  // Method to mark a notification as read
  markAsRead(id: number) {
    this.notifications.update(current =>
      current.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  // Read-only signal for components to consume
  get allNotifications() {
    return this.notifications.asReadonly();
  }
  
}
