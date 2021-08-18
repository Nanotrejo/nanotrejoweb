import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-flip-front',
  template: `
  <div class="flip-card-front">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./card-flip.component.css']
})
export class CardFlipFront {

}
