import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sm-followed-by',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './followed-by.component.html',
  styleUrls: ['./followed-by.component.css']
})
export class FollowedByComponent implements OnInit {

  @Input()
  label: string = ''

  @Input()
  followedBy: string = ''

  @ViewChild('inp') input: ElementRef<HTMLInputElement> | undefined = undefined;
  @ViewChild('calcSpan') calcSpan: ElementRef<HTMLInputElement> | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public textWidth = (text: string) => {
    this.calcSpan?.nativeElement.setAttribute('text', text);
    const w = this.calcSpan?.nativeElement.offsetWidth;
    console.log(w)
  }
}
