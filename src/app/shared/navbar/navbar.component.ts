import { Component, OnInit, HostListener } from '@angular/core';
import { KeyValue, Location } from '@angular/common';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  window_scroll = false;
  navigate = ['home', 'project', 'about', 'contact'];
  active_link = '';

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void { }

  @HostListener('document:scroll')
  windowScroll() {
    
    this.window_scroll = true
      ? document.documentElement.scrollTop > 0
      : false;

    this.navigate.forEach((nav) => {
      let aux = document.getElementById(nav);
      if (window.pageYOffset >= (aux?.offsetTop || 0) - 100) {
        this.active_link = nav;
      }
    });
  }

  goSection(path: string) {
    if (path.length > 0) {
      this.router.navigateByUrl(`/home#${path}`);
    } else {
      this.router.navigateByUrl('/home');
    }
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
