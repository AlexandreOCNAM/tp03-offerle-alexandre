import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import { Product } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  data: Product[] = [];
  filteredData: Product[] = [];

  constructor(private dataService: ProductsService) { }

  search(searchTerm: string) {
    this.filteredData = this.data.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  ngOnInit() : void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.filteredData = this.data;
    }
    );
  }
}
