import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ThemeService } from '../common/theme.service'

enum NavButtonStatus {
    SELECTED = 'selected',
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

enum NavButtonType {
    COMMON = 'common',
    MAIN = 'main'
}

interface NavButton {
    title: string,
    path: string,
    type: NavButtonType,
    status: NavButtonStatus,
}

class NavButton implements NavButton {
    constructor(
        { title, path, type = NavButtonType.COMMON, status = NavButtonStatus.ENABLED }:
            { title: string, path: string, type?: NavButtonType, status?: NavButtonStatus }
    ) {
        this.title = title
        this.path = path
        this.type = type
        this.status = status
    }
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./scss/navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    navButtons: NavButton[] = [
        new NavButton({ title: 'Home', path: '/', type: NavButtonType.MAIN }),
        new NavButton({ title: 'CV', path: '/cv' }),
        new NavButton({ title: 'Projects', path: '/projects' }),
    ]

    selectedNavButton: NavButton

    isDarkTheme: Observable<boolean>

    width: number
    isSideNavOpen: boolean

    constructor(
        private router: Router,
        private themeService: ThemeService,
        private titleService: Title,
    ) { }

    ngOnInit(): void {
        this.isDarkTheme = this.themeService.isDarkTheme
        this.router.events.subscribe((val: any) => {
            if (val.error) { val.url = '/' }
            this.onNavButtonClick(this.navButtons.find(but => but.path === val.url))
        })
        this.onResize()
    }

    setDarkTheme(isDarkTheme: boolean): void {
        this.themeService.setDarkTheme(isDarkTheme)
    }

    onNavButtonClick(navButton: NavButton): void {
        if (navButton !== this.selectedNavButton && navButton.status !== NavButtonStatus.DISABLED) {
            this.navButtons.forEach(but => {
                if (but !== navButton && but.status === NavButtonStatus.SELECTED) {
                    but.status = NavButtonStatus.ENABLED
                }
            })
            navButton.status = NavButtonStatus.SELECTED
            this.titleService.setTitle(`Maxi - ${navButton.title}`)
        }
        this.isSideNavOpen = false
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: any): void {
        this.width = (event?.target || window).innerWidth
    }

    isSlim(): boolean {
        return this.width < 700
    }
}
