import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks: Stock[] = [
    new Stock(1, 'Apple', 2.99, 3.5, 'Apple', ["IT", "ECommerce"]),
    new Stock(2, 'Google', 3.99, 2.5, 'Google', ["IT"]),
    new Stock(3, 'LinkdIn', 4.99, 3.5, 'LinkdIn', ["IT"]),
    new Stock(4, 'Amazon', 5.99, 4.0, 'Amazon', ["IT", "ECommerce"]),
    new Stock(5, 'Slack', 6.99, 1.5, 'Slack', ["IT", "Chat"]),
    new Stock(6, 'Github', 7.99, 3.0, 'Github', ["IT"]),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    let stock =  this.stocks.find(stock=> stock.id == id);
    if(!stock)
    {
      stock = new Stock(0,"",0,0,"",[]);
    }
    return stock;
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}