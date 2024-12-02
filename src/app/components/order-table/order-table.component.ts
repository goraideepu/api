import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Organization ID</th>
            <th>Ship To Org ID</th>
            <th>Creation Date</th>
            <th>Attribute 11</th>
            <th>Flow Status</th>
            <th>Booked Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let order of orders">
            <td>{{order.order_number}}</td>
            <td>{{order.org_id}}</td>
            <td>{{order.ship_to_org_id}}</td>
            <td>{{order.creation_date | date:'medium'}}</td>
            <td>{{order.attribute11}}</td>
            <td>{{order.flow_status_code}}</td>
            <td>{{order.booked_date | date:'medium'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .table-responsive {
      overflow-x: auto;
    }
    .table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }
    th, td {
      padding: 0.75rem;
      border-bottom: 1px solid #dee2e6;
      text-align: left;
    }
    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
    tr:hover {
      background-color: #f5f5f5;
    }
  `]
})
export class OrderTableComponent {
  @Input() orders: Order[] = [];
}