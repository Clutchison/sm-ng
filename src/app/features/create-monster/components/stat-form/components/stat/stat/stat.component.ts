import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FollowedByComponent } from 'src/app/shared/components/followed-by/followed-by/followed-by.component';

@Component({
  selector: 'sm-stat',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FollowedByComponent,
  ],
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input('label') label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public calcSuffix = (stat: number): string => {
    const mod: number = Math.floor((stat - 10) / 2);
    return '(' + (mod > 0 ? '+' : '') + mod + ')';
  }

}
