import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;
  
  @Input()
  readOnly:boolean = true;

  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(i:number){
    if(!this.readOnly)
    {
      this.rating = i + 1;
      console.log("haha");
      this.ratingChange.emit(this.rating);
    }
  }
}
