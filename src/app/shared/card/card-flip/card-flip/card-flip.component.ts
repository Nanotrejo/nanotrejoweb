import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.css'],
})
export class CardFlipComponent implements OnInit {
  toggleProperty = false;
  currentYear: Date = new Date();
  personalInfo = {
    Nombre: 'David',
    Apellidos: 'Trejo Fernández',
    Edad: this.currentYear.getFullYear() - 1995,
    Profesión: 'Ingeniero Informático',
    Hobbies: 'Deporte - música - comer'
  };

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
