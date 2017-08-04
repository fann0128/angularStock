import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;
  constructor(private routerInfo:ActivatedRoute ,private stockService:StockService, private router:Router) { }

  ngOnInit() {
    this.stock = this.stockService.getStock(this.routerInfo.snapshot.params['id']);
  }

  cancel(){
    this.router.navigateByUrl('/stocks');
  }
  save(){
    this.router.navigateByUrl('/stocks');
  }
}
