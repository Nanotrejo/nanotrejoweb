import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  window_scroll = true;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  @HostListener("document:scroll")
  windowScroll(){
    this.window_scroll = true ? document.body.scrollTop > 70 
    || document.documentElement.scrollTop > 70 : false;
  }

}
