import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private isDark = new BehaviorSubject<boolean>(true)
    isDarkTheme = this.isDark

    setDarkTheme(isDarkTheme: boolean): void {
        console.log('setDarkTheme')
        this.isDark.next(isDarkTheme)
        localStorage.setItem('isDarkTheme', isDarkTheme ? 'true' : 'false')
    }
}
