import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit{

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private dataService: ProductsService) { 
    
  }

  search(searchTerm: string) {
    this.filteredProducts = this.products.filter(product => {
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.price.toString().includes(searchTerm);
    });
  }

  ngOnInit() : void {
    this.dataService.getData().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    }
    );
  }
}
