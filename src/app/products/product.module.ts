import { NgModule } from '@angular/core';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {ProductsDetailsComponent} from './products-details.component';
import {ProductsListComponent} from './products-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductsDetailsGuard} from './products-details.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    ProductsDetailsComponent,
    ProductsListComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent},
      { path: 'products/:id', component: ProductsDetailsComponent, canActivate: [ProductsDetailsGuard]},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
