import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../../core/service/timeline.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  cv: String = '';

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.getCV().subscribe((res: any) => {
      this.cv = res.msg;
    });
  }
}
