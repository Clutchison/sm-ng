import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/ref.service';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatGridListModule,
  MatSlideToggleModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpeedInputComponent } from './components/speed-input/speed-input.component';
import { StatComponent } from './components/stat/stat/stat.component';
import { HpInputComponent } from './components/hp-input/hp-input/hp-input.component';
import { SpecialCharacterDirective } from 'src/app/shared/directives/special-char/special-char.directive';

@Component({
  selector: 'sm-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrls: ['./stat-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpeedInputComponent,
    StatComponent,
    HpInputComponent,
    SpecialCharacterDirective,
  ],
  providers: [
    ReferenceService
  ]
})
export class StatFormComponent implements OnInit {

  crs: string[] = [];
  sizes: string[] = [];
  alignments: string[] = [];

  constructor(private refService: ReferenceService) { }

  ngOnInit(): void {
    this.refService.getCRs().then(crs => this.crs = crs);
    this.refService.getSizes().then(sizes => this.sizes = sizes);
    this.refService.getAlignments().then(als => this.alignments = als);
  }

}
