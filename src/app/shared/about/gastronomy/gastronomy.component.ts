import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gastronomy',
  templateUrl: './gastronomy.component.html',
  styleUrls: ['./gastronomy.component.css']
})
export class GastronomyComponent implements OnInit {

  loading: boolean = false;
  notionURL: any = 'https://v1.embednotion.com/embed/25007679163d4b138ce5e1eb7e47c9dd';
  notionSanitizer: any;

  constructor(private sanitizer: DomSanitizer) {
    this.notionSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.notionURL);
  }

  ngOnInit(): void {
    this.getDataNotion();
  }

  getDataNotion() {
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }
}
