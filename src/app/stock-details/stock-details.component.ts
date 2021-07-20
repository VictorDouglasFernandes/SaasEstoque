import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockInterface } from '../../assets/stocks';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock: StockInterface;
  constructor(private route: ActivatedRoute, private stockService: StockService) { }

  ngOnInit(): void {
    this.stock = this.stockService.getStockById(this.route.snapshot.params.id)[0];
  }

}
