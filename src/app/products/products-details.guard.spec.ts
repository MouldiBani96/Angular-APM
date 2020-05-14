import { TestBed, async, inject } from '@angular/core/testing';

import { ProductsDetailsGuard } from './products-details.guard';

describe('ProductsDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDetailsGuard]
    });
  });

  it('should ...', inject([ProductsDetailsGuard], (guard: ProductsDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
