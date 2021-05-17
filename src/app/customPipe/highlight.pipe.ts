import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: string, name: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(
      '<div style="color:#ff6666; font-weight: bold;">' + name + '\'s question: ' + '</div>');
  }

}
