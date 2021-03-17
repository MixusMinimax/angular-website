import { Injectable } from '@angular/core'
import { createClient, CreateClientParams } from 'contentful'
import { from, Observable } from 'rxjs'
import { CV } from '../models/cv'
import cvMock from '../mock/cv.json'
import schemaJson from '../schemas/cv.schema.json'
import { isValid, makeValidator } from '../models/validation'

const CONFIG: CreateClientParams = {
    space: 'bp893k004d65',
    accessToken: 'P0yhCtlkmn78L5wM3dSY39iE5JcKAfBxMtAwHKl_0ow',
}

const cvValidator = makeValidator<CV>(schemaJson)

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {

    protected client = createClient(CONFIG)

    constructor() { }

    getCV(): Observable<CV> {
        return from(this.client.getEntries({
            content_type: 'cv',
            'fields.name[match]': 'Maxi Barmetler'
        }).catch(() => null).then(res => {
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
        }))
    }
}
