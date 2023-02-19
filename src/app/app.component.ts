import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { test } from './tesseract/tess.service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sm-ng';
  url = 'https://i.imgur.com/VaiOZ7G.png';
  output = '';

  @ViewChild('box') box: ElementRef<HTMLInputElement> | undefined = undefined;

  constructor(private renderer: Renderer2) { }

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
