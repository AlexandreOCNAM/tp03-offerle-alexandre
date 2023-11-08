import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductComponent } from './product/product.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
