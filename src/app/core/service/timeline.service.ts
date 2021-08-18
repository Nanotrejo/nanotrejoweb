import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '../interface/timeline';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor(private http: HttpClient) {}

  getTimeline() {
    return this.http.get<Timeline[]>(`${environment.nanotrejoback}/timeline`);
  }

  getCV() {
    return this.http.get(`${environment.nanotrejoback}/get-cv`);
  }
}
