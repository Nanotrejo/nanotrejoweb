import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Project } from '@core/interface/project';
import { ProjectService } from '@core/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  loading = false;
  
  rotationAmt: number = 0;
  focused: number = 0;
  radius: number = 0;
  distToEdge: number = 0;
  timeout: any;

  carouselItemsElem!: HTMLElement;
  navElem!: HTMLElement;
  navBtn!: HTMLElement;

  constructor(private projectService: ProjectService) {}


  ngOnInit(): void {
    this.loading = true;
  }
  
  async ngAfterViewInit() {
    await this.getProject();
    this.initElement();
    this.createCarousel();
  }
  
  initElement(){
    this.carouselItemsElem = document.querySelector(
      '.carousel-items'
    ) as HTMLElement;
    this.navElem = document.querySelector('.navigation') as HTMLElement;
  }

  getProject(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.projectService
        .getProject()
        .subscribe((res: any) => {
          if (res.msg.length != 0) {
            res.msg.forEach((project: Project, index: number) => {
              this.projects.push(project);
              index === res.msg.length-1 && resolve(true);
            });
          }
        });
    });
  }

  async createCarousel(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.rotationAmt = 360 / this.projects.length;
      this.radius = 400 / (2 * Math.sin(Math.PI / this.projects.length));
      this.distToEdge = Math.round(Math.sqrt(this.radius ** 2 - 200 ** 2) + 30);

      this.carouselItemsElem?.style?.setProperty(
        '--distance',
        this.distToEdge + 'px'
      );
      this.projects.forEach((project: Project, index: number) => {
        project.rotation = Math.round(index * this.rotationAmt);
        this.navBtn = document.createElement('div');
        this.navBtn.classList.add("nav-dot");
        this.navElem.appendChild(this.navBtn);
        this.update();
      });

      resolve(true);
    });
  }

  select(index: number) {
    const closest = index - this.getFocusedIndex();
    this.focused += closest;
    this.update();
  }

  update() {
    this.carouselItemsElem.style.setProperty(
      '--rotation',
      -Math.round(this.focused * this.rotationAmt) + 'deg'
    );
    const { children }: any = this.carouselItemsElem;
    for (var i = 0; i < children.length; i++) {
      if (this.getFocusedIndex() === i) {
        children[i].style.setProperty('filter', 'blur(0)');
        this.navElem.children[i].classList.add('focused');
      } else {
        children[i].style.setProperty('filter', 'blur(2px)');
        this.navElem.children[i].classList.remove('focused');
      }
    }
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.focused++;
      // this.update();
    }, 5000);
  }

  getFocusedIndex() {
    let n = this.focused;
    while (n < 0) n += this.projects.length;
    return n % this.projects.length;
  }

  arrowRight() {
    this.focused++;
    this.update();
  }

  arrowLeft() {
    this.focused--;
    this.update();
  }
}
