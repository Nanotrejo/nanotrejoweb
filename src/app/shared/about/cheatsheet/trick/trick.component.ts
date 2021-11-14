import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tricks } from '@core/interface/tricks';
import { CheatsheetService } from '@core/service/cheatsheet.service';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.component.html',
  styleUrls: ['./trick.component.css'],
})
export class TrickComponent implements OnInit {
  tricks: Tricks[] = [];
  loading: boolean = false;
  constructor(
    private activatedRouter: ActivatedRoute,
    private cheatsheetService: CheatsheetService
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id = params.id;
      this.cheatsheetService.getTrickById(id).subscribe((trick: any[]) => {
        this.tricks = [...trick[0]];
        this.loading = true;
      });
    });
  }
}
