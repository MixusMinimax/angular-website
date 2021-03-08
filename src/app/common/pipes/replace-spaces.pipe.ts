import { Pipe, PipeTransform } from '@angular/core'

type Arg =
    'lower' |
    'upper'

@Pipe({
    name: 'replaceSpaces'
})
export class ReplaceSpacesPipe implements PipeTransform {

    transform(value: string, ...args: Arg[]): string {
        let ret = value.replace(/ /g, '-')
        if (args.includes('lower')) {
            ret = ret.toLowerCase()
        }
        if (args.includes('upper')) {
            ret = ret.toUpperCase()
        }

        return ret
    }
}
