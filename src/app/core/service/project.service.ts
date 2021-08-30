import { environment } from '@environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@core/interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(){
    return this.http.get<Project[]>(`${environment.nanotrejoback}/get-project`);        
  }
}
