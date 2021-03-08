import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'youtubeExtractID'
})
export class YoutubeExtractIDPipe implements PipeTransform {

    transform(value: string, ...args: string[]): string {
        let id = value?.match(
            /(?:(?:https?:)?\/\/)?(?:(?:youtu\.be\/)|(?:www\.youtube\.com\/watch\?(?:[^=v]+=[^?]+&)*v=))?(?<id>(?:\w|-){11})/
            )
        return id?.groups?.id;
    }
}
