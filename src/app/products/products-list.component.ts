import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {log} from 'util';
import {ProductService} from './product.servic';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls:  ['./products-list.component.css'],
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product;
  }

  pageTitle = 'Product List';
  imageWidh = 50;
  showImage = false;
  imageMargin = 2;
  errorMessage = '';
  filteredProducts: IProduct[] = [];
  product: IProduct[] = [];
  toggleImage(): void {
  this.showImage = !this.showImage;
}

  constructor( private productservice: ProductService) {


  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message ;
  }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe({
      next: products => {
        this.product = products;
        this.filteredProducts = this.product;
      },
      error: err => this.errorMessage = err
    });


  }

   performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.product.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}

