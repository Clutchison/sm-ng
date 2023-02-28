import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule, MatSlideToggleChange, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Size, sizeDiceMapping } from './hp-size-dice-mapping';
import { FollowedByComponent } from "../../../../../../../shared/components/followed-by/followed-by/followed-by.component";

@Component({
    selector: 'sm-hp-input',
    standalone: true,
    templateUrl: './hp-input.component.html',
    styleUrls: ['./hp-input.component.css'],
    imports: [CommonModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule, FollowedByComponent]
})
export class HpInputComponent implements OnInit {

  @Input() size: Size = 'medium';
  hpUsesDice: boolean = true;
  raw: number = 0;
  diceCount: number = 0;
  suffix: string = '';

  @Input('sizes') sizes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  update(hp: number) {
    this.raw = hp;
    this.diceCount = this.diceFromRaw(hp);
  }

  public toggle = (event: MatSlideToggleChange): void => {
    // Raw to Dice
    if (event.checked) {
      this.raw = this.rawFromDice(this.diceCount);
      // Dice to Raw
    } else {
      this.diceCount = this.diceFromRaw(this.raw);
    }
  }

  public rawSuffix = (): string => {
    return '(' + this.diceCount + 'd' + this.diceSize() + ')';
  }

  public diceSize = (): number => sizeDiceMapping[this.size];

  public diceFromRaw = (raw: number) => raw / this.diceSize();

  public rawFromDice = (dice: number) => dice * this.diceSize();
}
