import { ToSafeHtmlPipe } from './to-safe-html.pipe';

describe('ToSafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new ToSafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
