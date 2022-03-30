import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { ToSafeHtmlPipe } from './to-safe-html.pipe';

describe('ToSafeHtmlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new ToSafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
