import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core'
import { CV } from '../common/models/cv'
import { CvService } from '../common/services/cv.service'

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./scss/cv.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CvComponent implements OnInit {

    cv: CV

    width: number

    constructor(
        private cvService: CvService
    ) { }

    ngOnInit(): void {
        this.cvService.getCV('Maxi Barmetler').subscribe(val => {
            console.log(val)
            this.cv = val
        })

        this.onResize()
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.width = window.innerWidth
    }

    isSlim(): boolean {
        return this.width < 900
    }

    isExtremelySlim(): boolean {
        return this.width < 650
    }
}
