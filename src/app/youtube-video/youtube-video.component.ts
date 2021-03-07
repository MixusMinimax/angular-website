import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-youtube-video',
    templateUrl: './youtube-video.component.html',
    styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

    @Input() videoID: string
    urlSafe: SafeResourceUrl

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoID}`);
    }
}
