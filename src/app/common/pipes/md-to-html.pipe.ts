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

    transform(value: string, ...args: Arg[]): string {
        /*
        value = value.replace(/!\[[^\]]*\]\(([^\)]*)\)/g, (a, b) => {
            let id = this.youtubeExtractIDPipe.transform(b)
            console.log({ a, b, id })
            if (id)
                return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            return a;
        })
        */
        value = marked(value).replace(/\n$/, '')
        if (args.includes('no-paragraph')) {
            value = value.replace(/^<p>|<\/p>$/g, '')
        }
        if (args.includes('keep-newlines')) {
            value = super.transform(value)
        }
        return value
    }
}
