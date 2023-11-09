import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import { Product } from '../product';
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  recherche: string = "";
  produits$: Observable<Product[]>;

  constructor(private dataService: ProductsService) {
    this.produits$ = dataService.getData();
  }


  ngOnInit() : void {

  }
}
