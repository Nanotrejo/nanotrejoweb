import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Youtube } from '../interface/youtube';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Youtube>(`${environment.nanotrejoback}/get-videos`)
      .pipe(
        map(response => {
          this.nextPageToken = response.nextPageToken;
          return response.items;
        }),
        map(items => items.map(video => video.snippet))
      );
  }
}
