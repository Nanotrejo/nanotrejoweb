import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm){
    let body = JSON.stringify({
      body: form
    })
    return this.http.post(`${environment.nanotrejoback}/send-email`, body, {headers: this.httpHeaders});        
  }
}
