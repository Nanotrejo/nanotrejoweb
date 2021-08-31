import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
const typewriter = require('t-writer.js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.typewriter();
  }

  typewriter() {
    const target = document.querySelector('.typewriter');

    const typeColor = localStorage.getItem('light-mode') === 'false' ? '#00df9a' : '#00ffae';
    const cursorColor = localStorage.getItem('light-mode') === 'false' ? 'rgba(255,255,255, 0.74)' : 'rgba(50,50,50, 0.74)'

    const writer = new typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      typeColor: typeColor,
      cursorColor: cursorColor,
    })
      .type('entusiasta.')
      .rest(500)
      .changeOps({ deleteSpeed: 100 })
      .remove(11)
      .type('trabajador.')
      .rest(500)
      .remove(11)
      .type('profesional.')
      .rest(500)
      .changeOps({ deleteSpeed: 100 })
      .remove(12)
      .rest(500)
      .clear()
      .start();
  }
}
