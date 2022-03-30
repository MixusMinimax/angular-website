import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ToSafeHtmlPipe } from './to-safe-html.pipe';
import { YoutubeExtractIDPipe } from './youtube-extract-id.pipe';
import { YoutubePipe } from './youtube.pipe';

describe('YoutubePipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([YoutubeExtractIDPipe, ToSafeHtmlPipe], (
    youtubeExtractIDPipe: YoutubeExtractIDPipe,
    toSafeHtmlPipe: ToSafeHtmlPipe,
  ) => {
    const pipe = new YoutubePipe(youtubeExtractIDPipe, toSafeHtmlPipe);
    expect(pipe).toBeTruthy();
  }));
});
