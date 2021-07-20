import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "stocks", component: StocksComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "product/:id", component: ProductDetailsComponent},
  {path: "stock/:id", component: StockDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
