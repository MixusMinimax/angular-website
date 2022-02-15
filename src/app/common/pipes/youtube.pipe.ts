import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ToSafeHtmlPipe } from './to-safe-html.pipe';
import { YoutubeExtractIDPipe } from './youtube-extract-id.pipe';

@Pipe({
    name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

    constructor(
        private youtubeExtractIDPipe: YoutubeExtractIDPipe,
        private toSaveHtmlPipe: ToSafeHtmlPipe,
    ) { }

    transform(value: SafeHtml): SafeHtml {
        let str = (value as any).changingThisBreaksApplicationSecurity as string
        return this.toSaveHtmlPipe.transform(str.replace(/<img src="([^"]+)"(?: alt="[^"]+")?>/g, (match, src) => {
            let id = this.youtubeExtractIDPipe.transform(src)
            return id
                ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                : match
        }))
    }
}
