import { environment } from '@environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cheatsheet } from '../interface/cheatsheet';
import { map } from 'rxjs/operators';
import { Tricks } from '../interface/tricks';

@Injectable({
  providedIn: 'root',
})
export class CheatsheetService {
  constructor(private http: HttpClient) {}

  getAllCheatsheets() {
    return this.http
      .get<Cheatsheet[]>(`${environment.nanotrejoback}/get-cheatsheets`)
      .pipe(
        map((response: any) => {
          return response.msg;
        })
      );
  }
  getTrickById(cheatsheet_id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      cheatsheet_id: cheatsheet_id,
    });

    return this.http
      .get<Tricks[]>(`${environment.nanotrejoback}/get-cheatsheet-by-id`, {
        headers: headers,
      })
      .pipe(
        map((response: any) => {
          return response.msg;
        }),
        map((items) => items.map((trick: any) => trick.trick))
      );
  }
}
