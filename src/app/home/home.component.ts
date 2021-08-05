import { Component, OnInit } from '@angular/core';

const typewriter = require('t-writer.js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.typewriter');
   
    const writer = new typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      typeColor: '#00df9a',
      cursorColor: 'rgba(255,255,255, 0.74)'
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
      .start()
    }

}
