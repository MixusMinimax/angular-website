import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'newlineToBreak'
})
export class NewlineToBreakPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return (value as string).replace(/\n/g, '<br/>')
  }
}
