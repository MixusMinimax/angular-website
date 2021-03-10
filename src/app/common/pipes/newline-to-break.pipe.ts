import { Pipe, PipeTransform } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'
import { ToSafeHtmlPipe } from './to-safe-html.pipe'

@Pipe({
    name: 'newlineToBreak'
})
export class NewlineToBreakPipe implements PipeTransform {

    constructor(
        protected toSafeHtml: ToSafeHtmlPipe,
    ) { }

    transform(value: string, ...args: unknown[]): SafeHtml {
        return this.toSafeHtml.transform(value.replace(/\n/g, '<br/>'))
    }
}
