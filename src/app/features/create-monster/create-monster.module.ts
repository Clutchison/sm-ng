import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StatFormComponent } from './components/stat-form/stat-form.component';
import { CreateMonsterComponent } from './create-monster.component';
import { ReferenceService } from './components/stat-form/services/ref.service';



@NgModule({
  declarations: [
    CreateMonsterComponent,
    StatFormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [
    CreateMonsterComponent,
    StatFormComponent
  ],
  providers: [
    ReferenceService,
  ]
})
export class CreateMonsterModule { }
