import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { test } from './services/tess.service';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { StatFormComponent } from './components/stat-form/stat-form.component';

@Component({
  selector: 'sm-create-monster',
  templateUrl: './create-monster.component.html',
  styleUrls: ['./create-monster.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    StatFormComponent,
    MatButtonModule,
    MatInputModule,
  ]
})
export class CreateMonsterComponent implements AfterViewInit {
  url = 'https://i.imgur.com/VaiOZ7G.png';
  output = '';

  @ViewChild('box') box: ElementRef<HTMLInputElement> | undefined = undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.box?.nativeElement.setAttribute('value', this.url);
  }

  t() {
    if (this.url) {
      test(this.url).then(o => this.output = o);
    }
  }

  onKey(v: string) {
    this.url = v;
  }
}
