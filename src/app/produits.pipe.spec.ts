import { FilterProductsPipe } from './FilterProducts.pipe';

describe('ProduitsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
