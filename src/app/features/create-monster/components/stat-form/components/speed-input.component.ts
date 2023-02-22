import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatGridListModule,
  MatSlideToggleModule,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FollowedByComponent } from 'src/app/shared/components/followed-by/followed-by/followed-by.component';

@Component({
  selector: 'sm-speed-input',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FollowedByComponent,
  ],
  templateUrl: './speed-input.component.html',
  styleUrls: ['./speed-input.component.css']
})
export class SpeedInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
