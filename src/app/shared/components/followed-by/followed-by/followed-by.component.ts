import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { getTextWidth } from 'get-text-width';
import { SpecialCharacterDirective } from 'src/app/shared/directives/special-char/special-char.directive';


type callback = (n: number) => string;

@Component({
  selector: 'sm-followed-by',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SpecialCharacterDirective,
  ],
  templateUrl: './followed-by.component.html',
  styleUrls: ['./followed-by.component.css']
})
export class FollowedByComponent implements OnInit {

  @Input() label: string = ''

  @Input() followedBy: string = ''

  @Input() followedCalc: callback | undefined;

  @Input() centerText: boolean = false;

  @ViewChild('inp') input: ElementRef<HTMLInputElement> | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public prefixOffset = (text: string): number => {
    if (!this.centerText || text === '') return 0;
    return getTextWidth(text + ' ' + this.calcFollowedBy()) / 2 - (getTextWidth(text) / 2);
  }

  public suffixOffset = (text: string): number => {
    if (!this.centerText) return getTextWidth(text + ' ');
    return getTextWidth(text + ' ' + this.calcFollowedBy()) / 2 -
      (getTextWidth(this.calcFollowedBy()) / 2);
  }

  public calcFollowedBy = (): string => {
    return (this.followedCalc) ?
      this.followedCalc(Number.parseInt(this.input?.nativeElement?.value || '0')) :
      this.followedBy;
  }
}
