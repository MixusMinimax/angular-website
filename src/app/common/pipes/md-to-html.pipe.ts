import { Pipe, PipeTransform } from '@angular/core'
import marked from 'marked'
import { NewlineToBreakPipe } from './newline-to-break.pipe'

type Arg =
    'no-paragraph' |
    'keep-newlines'

@Pipe({
    name: 'mdToHtml'
})
export class MdToHtmlPipe extends NewlineToBreakPipe implements PipeTransform {
    transform(value: unknown, ...args: Arg[]): string {
        let ret = marked(value as string).replace(/\n$/, '')
        if (args.includes('no-paragraph')) {
            ret = ret.replace(/^<p>|<\/p>$/g, '')
        }
        if (args.includes('keep-newlines')) {
            ret = super.transform(ret)
        }
        return ret
    }
}
