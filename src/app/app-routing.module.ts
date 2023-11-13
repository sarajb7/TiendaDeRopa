
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products/new',
    component: ProductsFormComponent
  },
  {
    path: 'products/:id',
    component: ProductsDetailComponent
  },
  
  {path: 'products', component: ProductsListComponent},
  {path: 'users', component: UsersFormComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
