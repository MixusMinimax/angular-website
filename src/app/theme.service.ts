import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark = new Subject<boolean>()
  isDarkTheme = this.isDark.asObservable()

  setDarkTheme(isDarkTheme: boolean): void {
    console.log('setDarkTheme')
    this.isDark.next(isDarkTheme)
    localStorage.setItem('isDarkTheme', isDarkTheme ? 'true' : 'false')
  }
}
