import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NewlineToBreakPipe } from './newline-to-break.pipe';
import { ToSafeHtmlPipe } from './to-safe-html.pipe';

describe('NewlineToBreakPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([ToSafeHtmlPipe], (toSafeHtml: ToSafeHtmlPipe) => {
    const pipe = new NewlineToBreakPipe(toSafeHtml);
    expect(pipe).toBeTruthy();
  }));
});
