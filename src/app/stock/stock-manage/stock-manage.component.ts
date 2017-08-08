import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock, StockService } from '../stock.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  private keyword:string;

  searchInput: FormControl = new FormControl();

  constructor(public router: Router, private stockService: StockService) { 
    this.searchInput.valueChanges
        .debounceTime(500)
        .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  create() {
    this.router.navigateByUrl('/stocks/0');
  }
  update(stock: Stock) {
    this.router.navigateByUrl('/stocks/' + stock.id);
  }


}