import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs'
import { ThemeService } from 'src/app/common/theme.service'

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ThemeToggleComponent implements OnInit {

    faSun = faSun
    faMoon = faMoon

    constructor(
        private themeService: ThemeService
    ) { }

    ngOnInit(): void {
    }

    toggleDarkTheme(): void {
        this.themeService.setDarkTheme(!this.themeService.isDarkTheme.value)
    }
}
