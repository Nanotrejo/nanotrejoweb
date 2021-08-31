import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],

})
export class DarkModeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    let switchButton = document.getElementById('switch')?.classList;
    let body = document.body.classList;
    
    if (this.getLocalStorage('light-mode')) {
      body.toggle('light');
      switchButton?.toggle('active');
    } else {
      this.setLocalStorage('light-mode');
      switchButton?.toggle('deactive');
    }
  }

  changeMode(): void {
    let switchButton = document.getElementById('switch')?.classList;
    let body = document.body.classList;

    body.toggle('light');
    switchButton?.toggle('active');
    this.setLocalStorage('light-mode');
  }

  getLocalStorage(value: string): boolean {
    return localStorage.getItem(value) === 'true';
  }

  setLocalStorage(value: string): void {
    if (document.body.classList.contains('light')) {
      localStorage.setItem(value, 'true');
    } else {
      localStorage.setItem(value, 'false');
    }
  }

}
