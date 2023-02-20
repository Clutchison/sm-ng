import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatGridListModule,
  MatSlideToggleModule,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatFormComponent } from './components/stat-form/stat-form.component';
import { CreateMonsterComponent } from './create-monster.component';


@NgModule({
  declarations: [
    CreateMonsterComponent,
    StatFormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [
    CreateMonsterComponent,
    StatFormComponent
  ]
})
export class CreateMonsterModule { }
