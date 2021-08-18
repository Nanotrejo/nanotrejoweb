import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-flip-back',
  template: `
   <div class="flip-card-back">
    <ng-content></ng-content>    
  </div>
  `,
  styleUrls: ['./card-flip.component.css']
})
export class CardFlipBack{
}
