import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ThemeService } from '../theme.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isDarkTheme: Observable<boolean>

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme
  }

  setDarkTheme(isDarkTheme: boolean): void {
    this.themeService.setDarkTheme(isDarkTheme)
  }
}
