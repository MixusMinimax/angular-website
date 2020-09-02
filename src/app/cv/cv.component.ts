import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Observable } from 'rxjs'
import { CV } from '../common/cv'
import { CVService } from '../common/cv.service'

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

  constructor(private cvService: CVService) { }

  ngOnInit(): void {
    this._cv = this.cvService.getCV()
    this._cv.subscribe(val => {
      console.log(val)
      this.cv = val
    })
  }
}
