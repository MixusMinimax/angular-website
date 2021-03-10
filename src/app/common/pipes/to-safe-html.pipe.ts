import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'toSafeHtml'
})
export class ToSafeHtmlPipe implements PipeTransform {

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    transform(value: string, ...args: unknown[]): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value)
    }

}
