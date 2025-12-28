 import { Component } from '@angular/core';

interface IProduct {
  name: string;
  description: string;
  status: 'In Progress' | 'Dispatched' | 'Delivered';
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productName: string = '';
  productDesc: string = '';

  products: IProduct[] = [
    {
      name: 'Samsung M31',
      description: 'Mobile useful device. The Product is Samsung M31',
      status: 'In Progress'
    },
    {
      name: 'iPhone',
      description: 'Mobile useful device. The Product is iPhone',
      status: 'Dispatched'
    }
  ];

  addProduct() {
    if (!this.productName.trim() || !this.productDesc.trim()) return;

    this.products.unshift({
      name: this.productName,
      description: this.productDesc,
      status: 'In Progress'
    });

    this.productName = '';
    this.productDesc = '';
  }

  changeStatus(product: IProduct, status: 'In Progress' | 'Dispatched' | 'Delivered') {
    product.status = status;
  }

  isActive(product: IProduct, status: 'In Progress' | 'Dispatched' | 'Delivered'): boolean {
    return product.status === status;
  }
}
