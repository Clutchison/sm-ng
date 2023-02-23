import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sm-hp-input',
  standalone: true,
  imports: [CommonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './hp-input.component.html',
  styleUrls: ['./hp-input.component.css']
})
export class HpInputComponent implements OnInit {

  hpUsesDice: boolean = true;
  hp: number = 0;

  @Input('sizes') sizes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
