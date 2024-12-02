import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { OrderTableComponent } from '../order-table/order-table.component';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, OrderTableComponent],
  template: `
    <div class="dashboard">
      <h1>Order Dashboard</h1>
      
      <div *ngIf="loading" class="loading">
        Loading orders...
      </div>
      
      <div *ngIf="error" class="error">
        {{ error }}
      </div>
      
      <app-order-table 
        *ngIf="!loading && !error" 
        [orders]="orders">
      </app-order-table>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 1rem;
    }
    h1 {
      margin-bottom: 1.5rem;
      color: #333;
    }
    .loading {
      padding: 1rem;
      text-align: center;
      color: #666;
    }
    .error {
      padding: 1rem;
      color: #dc3545;
      background-color: #f8d7da;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  `]
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  error: string | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      }
    });
  }
}