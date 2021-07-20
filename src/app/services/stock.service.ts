import { Injectable } from '@angular/core';
import { stocks } from '../../assets/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks(){
    return stocks;
  }

  getStockById(id: number){
    return stocks.filter(stock=>stock.id == id);
  }
}
