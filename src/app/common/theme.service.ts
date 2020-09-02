import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { delay, startWith } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark = new Subject<boolean>()
  isDarkTheme = this.isDark.asObservable().pipe(
    startWith(false),
    delay(0),
  )

  setDarkTheme(isDarkTheme: boolean): void {
    console.log('setDarkTheme')
    this.isDark.next(isDarkTheme)
    localStorage.setItem('isDarkTheme', isDarkTheme ? 'true' : 'false')
  }
}
