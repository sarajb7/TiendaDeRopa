
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
// import { ProductsCategoriesComponent } from './products/products-categories/products-categories.component';
import { UsersFormComponent } from './users/users-form/users-form.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsListComponent},
  // {path: 'categories', component: ProductsCategoriesComponent},
  {path: 'users', component: UsersFormComponent},
  // {path: 'categories/jellery', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
