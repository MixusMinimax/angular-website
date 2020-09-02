import { Injectable } from '@angular/core'
import { createClient } from 'contentful'
import { Observable, scheduled } from 'rxjs'
import { asap } from 'rxjs/internal/scheduler/asap'
import { CV } from './cv'
import cvMock from './mock/cv.json'
import schemaJson from './schemas/cv.schema.json'
import { isValid, makeValidator } from './validation'

const CONFIG = {
  space: 'bp893k004d65',
  accessToken: 'P0yhCtlkmn78L5wM3dSY39iE5JcKAfBxMtAwHKl_0ow',

  contentTypeIds: {
    cv: 'cv'
  }
}

const cvValidator = makeValidator<CV>(schemaJson)

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  })

  constructor() { }

  getCV(): Observable<CV> {
    return scheduled(this.client.getEntries({
      content_type: CONFIG.contentTypeIds.cv
    }).catch(e => null).then(res => {
      const result = res?.items?.[0]?.fields
      console.log(result)
      if (result && isValid(cvValidator, result)) {
        return result
      } else {
        if (isValid(cvValidator, cvMock)) {
          return cvMock
        } else {
          return null
        }
      }
    }), asap)
  }
}
