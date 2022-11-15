import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
HomeComponent
const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"cart", component: CartComponent},
  { path: "table", component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routngComponents = [HomeComponent, CartComponent, TableComponent]
