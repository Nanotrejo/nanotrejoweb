import { Component, OnInit } from '@angular/core';
import { Project } from '@core/interface/project';
import { ProjectService } from '@core/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  loading = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
      this.getProject();
  }

  getProject(): void {
    this.projectService.getProject().subscribe((res: any) => {
      if (res.msg.length != 0) {
        res.msg.forEach((project: Project) => {
          this.projects.push(project);
          this.loading = true;
        });
      }
    });
  }
}
