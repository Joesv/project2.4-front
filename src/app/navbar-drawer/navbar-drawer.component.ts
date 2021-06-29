import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-drawer',
  templateUrl: './navbar-drawer.component.html',
  styleUrls: ['./navbar-drawer.component.css']
})
export class NavbarDrawerComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
