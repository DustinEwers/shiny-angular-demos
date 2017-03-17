import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [{
      label: 'Ninjas Quest'
    }];
  }
}
