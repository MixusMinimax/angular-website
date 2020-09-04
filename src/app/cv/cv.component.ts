import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core'
import { Observable } from 'rxjs'
import { ContentfulService } from '../common/contentful.service'
import { CV } from '../common/cv'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./css/cv.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CvComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _cv: Observable<CV>
  cv: CV

  width: number

  constructor(private cvService: ContentfulService) { }

  ngOnInit(): void {
    this._cv = this.cvService.getCV()
    this._cv.subscribe(val => {
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
    return this.width < 1000
  }
}
