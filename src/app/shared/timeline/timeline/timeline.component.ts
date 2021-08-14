import { Component, OnInit } from '@angular/core';
import { Timeline } from '../../../core/interface/timeline';
import { TimelineService } from '../../../core/service/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  timeline: Timeline[] = [];

  colorType = {
    curso: '',
    job: '#ff000075',
    certificate: '#00ffb073',
    study: '#878923'
  };

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    
    this.timelineService.getTimeline().subscribe((res: any) => {
      this.timeline = [...res.msg];
      this.timeline.map((time) => {
        if (time?.type !== undefined) {
          let col = Object.keys(this.colorType).indexOf(time?.type.toLowerCase());
          time.type = Object.values(this.colorType)[col];
        }
      });
  
      this.timeline.sort((a: Timeline, b: Timeline) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    });
  }

  getColor(typeTime: string): string {
    console.log('HOLA', typeTime);
    switch (typeTime) {
      case 'Curso':
        return '';
      case 'Job':
        return '#ff000075';
      case 'Certificate':
        return '#00ffb073';
      default:
        return '';
    }
  }
}
