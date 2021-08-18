import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlipComponent } from './card-flip.component';
import { CardFlipBack } from './card-flip-back';
import { CardFlipFront } from './card-flip-front';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardFlipComponent, CardFlipBack, CardFlipFront],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CardFlipComponent, CardFlipBack, CardFlipFront]
})
export class CardFlipModule { }
