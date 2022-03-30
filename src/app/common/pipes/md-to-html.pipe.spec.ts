import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { ToSafeHtmlPipe } from './to-safe-html.pipe';
import { YoutubeExtractIDPipe } from './youtube-extract-id.pipe';

describe('MdToHtmlPipe', () => {
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
    toSafeHtml: ToSafeHtmlPipe,
  ) => {
    const pipe = new MdToHtmlPipe(youtubeExtractIDPipe, toSafeHtml);
    expect(pipe).toBeTruthy();
  }));
});
