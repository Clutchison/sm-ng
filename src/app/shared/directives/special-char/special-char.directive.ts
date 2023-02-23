import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[smSpecialChar]',
  standalone: true
})
export class SpecialCharacterDirective {

  private regex: { [key in WhitelistType]: string } = {
    numeric: '[0-9]',
    alphaNumeric: '[a-zA-Z0-9_]',
  };
  @Input() whitelist: WhitelistType | string = 'numeric';

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return this.getRegex().test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  isWhitelistType(s: string): s is WhitelistType {
    return !!Object.values(WHITELIST_TYPE).find(wlt => wlt === s);
  }

  getRegex(positive: boolean = true): RegExp {
    const regString = this.isWhitelistType(this.whitelist) ?
      this.regex[this.whitelist] :
      this.whitelist;
    return positive ?
      new RegExp('^' + regString + '*$') :
      new RegExp('(?!' + regString + ').', 'g');
  }

  validateFields(event: ClipboardEvent) {
    event.preventDefault();
    const killme = this.getRegex(false);
    const pasteData = event?.clipboardData?.getData('text/plain')
      .replace(killme, '')
      .replace(/\s/g, '');
    console.log(killme + ' - ' + pasteData);
    this.el.nativeElement.value = pasteData;
  }
}

const WHITELIST_TYPE = {
  alphaNum: 'alphaNumeric',
  numeric: 'numeric'
} as const;

type ObjectValues<T> = T[keyof T];

type WhitelistType = ObjectValues<typeof WHITELIST_TYPE>;