import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./product";

@Pipe({
  name: 'filterProduits'
})
export class FilterProductsPipe implements PipeTransform {

  transform(values: Product[], seachText: string): Product[] {
    if (!values) return [];
    if (!seachText) return values;

    return values.filter((product) =>
      product.name.toLowerCase().includes(seachText.toLowerCase())
    )
  }

}
