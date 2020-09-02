import { Injectable } from '@angular/core'
import { Observable, scheduled } from 'rxjs'
import { asap } from 'rxjs/internal/scheduler/asap'
import { CV } from './cv'
import cvMock from './mock/cv.json'
import schemaJson from './schemas/cv.schema.json'
import { isValid, makeValidator } from './validation'

const cvValidator = makeValidator<CV>(schemaJson)

@Injectable({
  providedIn: 'root'
})
export class CVService {

  getCV(): Observable<CV> {
    if (isValid(cvValidator, cvMock)) {
      return scheduled([cvMock], asap)
    } else {
      return scheduled([null], asap)
    }
  }

  constructor() { }
}
