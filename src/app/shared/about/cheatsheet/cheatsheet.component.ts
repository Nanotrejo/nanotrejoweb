import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cheatsheet } from '@core/interface/cheatsheet';
import { CheatsheetService } from '@core/service/cheatsheet.service';

@Component({
  selector: 'app-cheatsheet',
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.css'],
})
export class CheatsheetComponent implements OnInit {
  loading: boolean = false;
  allCheats: Cheatsheet[] = [];
  searchCheats: Cheatsheet[] = [];

  constructor(
    private router: Router,
    private cheatsheetService: CheatsheetService
  ) {}

  ngOnInit(): void {
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
    this.cheatsheetService
      .getAllCheatsheets()
      .subscribe((cheatsheet: Cheatsheet[]) => {
        this.allCheats = [...cheatsheet].reverse();
        this.searchCheats = [...cheatsheet].reverse();
        this.loading = true;
      });
  }

  getAllCheatsheets() {
    return this.cheatsheetService.getAllCheatsheets();
  }

  viewCheatsheet(id: string, type: string): void {
    this.router.navigate([type, id]);
  }

  searchCheatsheet(event: any): void {
    const val = event.target.value.toLowerCase();

    this.allCheats = this.searchCheats.filter((search) => {
      return (
        `${search.title.toLowerCase()}`.includes(val) ||
        `${search.description.toLowerCase()}`.includes(val) ||
        `${search.type.toLowerCase()}`.includes(val) ||
        `${search.author.toLowerCase()}`.includes(val) ||
        !val
      );
    });
  }
}
