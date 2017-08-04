import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';
  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log(event);
        if (event.url == '/dashboard') {
          this.pageTitle = 'Dashboard';
          this.pageDesc = 'Dashboard';
        } else if (event.url == '/stocks') {
          this.pageTitle = 'Stocks';
          this.pageDesc = 'Stocks Management';
        }
      })
  }

  ngOnInit() {

  }

}
