import { Pipe, PipeTransform } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'
import marked from 'marked'
import { NewlineToBreakPipe } from './newline-to-break.pipe'
import { ToSafeHtmlPipe } from './to-safe-html.pipe'
import { YoutubeExtractIDPipe } from './youtube-extract-id.pipe'

type Arg =
    'no-paragraph' |
    'keep-newlines'

@Pipe({
    name: 'mdToHtml'
})
export class MdToHtmlPipe extends NewlineToBreakPipe implements PipeTransform {

    constructor(
        private youtubeExtractIDPipe: YoutubeExtractIDPipe,
        protected toSafeHtml: ToSafeHtmlPipe,
    ) {
        super(toSafeHtml)
    }

    transform(value: string, ...args: Arg[]): SafeHtml {
        value = value.replace(/!\[[^\]]*\]\(([^\)]*)\)/g, (a, b) => {
            let id = this.youtubeExtractIDPipe.transform(b)
            console.log({ a, b, id })
            if (id)
                return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            return a;
        })
        value = marked(value).replace(/\n$/, '')
        if (args.includes('no-paragraph')) {
            value = value.replace(/^<p>|<\/p>$/g, '')
        }
        if (args.includes('keep-newlines')) {
            return super.transform(value)
        }
        return this.toSafeHtml.transform(value)
    }
}
