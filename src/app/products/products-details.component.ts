import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.servic';

@Component({
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;
  constructor(private  route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
     let param  = +this.route.snapshot.paramMap.get('id');
     if (param ) {
      const id = +param ;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
onBack(): void {
    this.router.navigate(['products']);
}
}
