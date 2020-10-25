import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'
import { delay, multicast, startWith } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private isDark = new BehaviorSubject<boolean>(false)
    isDarkTheme = this.isDark

    setDarkTheme(isDarkTheme: boolean): void {
        console.log('setDarkTheme')
        this.isDark.next(isDarkTheme)
        localStorage.setItem('isDarkTheme', isDarkTheme ? 'true' : 'false')
    }
}
