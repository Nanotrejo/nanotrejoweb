import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tricks } from '@core/interface/tricks';
import { CheatsheetService } from '@core/service/cheatsheet.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.component.html',
  styleUrls: ['./trick.component.css'],
})
export class TrickComponent implements OnInit {
  loading: boolean = false;
  markdown = '';
  markdownRaw = '';

  constructor(
    private mdService: MarkdownService,
    private cheatsheetService: CheatsheetService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMarkdown();
  }

  getMarkdown(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id = params.id;
      this.cheatsheetService.getMarkdownById(id).subscribe((trick: any) => {
        this.markdown = this.mdService.compile(trick.file);
        this.markdown = this.addTargetBlank(this.markdown);
        this.markdown = this.addClassP(this.markdown);
        this.markdown = this.addClassTitle(this.markdown);
        this.loading = true;
      });
    });
  }

  addTargetBlank(html: string) {
    return html.replace(
      new RegExp('<a', 'g'),
      '<a class="link-trick" target="_blank" rel="nofollow" '
    );
  }

  addClassP(html: string) {
    return html.replace(new RegExp('<p>', 'g'), '<p class="text-spacing">');
  }

  addClassTitle(html: string) {
    return html.replace(new RegExp('<h2', 'g'), '<h2 class="text-title-trick"');
  }

  onLoad(data: any) {
    console.error(data);
  }

  onError(data: any) {
    console.error(data);
  }

  // getParams(): void {
  //   this.activatedRouter.params.subscribe((params) => {
  //     const id = params.id;
  //     this.cheatsheetService.getTrickById(id).subscribe((trick: any[]) => {
  //       this.tricks = [...trick[0]];
  //       this.loading = true;
  //     });
  //   });
  // }
}
