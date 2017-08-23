import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private nbOfMessages:number;
  constructor() { 

    this.nbOfMessages = Math.round(Math.random()*10) + 1;

  }

  ngOnInit() {
  }

}
