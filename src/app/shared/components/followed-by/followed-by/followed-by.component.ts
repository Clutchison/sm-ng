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

  public suffixOffset = (text: string): number => {
    return getTextWidth(text + ' ') * 1.25;
  }

  public calcFollowedBy = (): string => {
    return (this.followedCalc) ?
      this.followedCalc(Number.parseInt(this.input?.nativeElement?.value || '0')) :
      this.followedBy;
  }
}
