import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'cursive'
})
export class CursivePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: string, info: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(
      '<div style="font-style: italic">' + info + '</div>');
  }

}
