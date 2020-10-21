import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ThemeService } from './common/theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'website'
  isDarkTheme: Observable<boolean>

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme
    this.isDarkTheme.subscribe(value => {
      if (value) {
        document.body.classList.add('dark-theme')
      } else {
        document.body.classList.remove('dark-theme')
      }
    })
  }

  ngAfterViewInit(): void {
    this.themeService.setDarkTheme(localStorage.getItem('isDarkTheme') === 'true')
  }
}
