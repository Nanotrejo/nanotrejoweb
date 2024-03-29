import { environment } from '@environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '@core/interface/timeline';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor(private http: HttpClient) { }

  getTimeline() {
    return this.http.get<Timeline[]>(`${environment.nanotrejoback}/timeline`);
  }

  getCV() {
    return this.http.get(`${environment.nanotrejoback}/get-cv`);
  }

  getColorsType() {
    return {
      curso: '#17252dbf',
      job: '#ff000075',
      certificate: '#00ffb073',
      study: '#878923'
    };
  }
}
