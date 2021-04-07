import { Injectable } from '@angular/core'
import { createClient, CreateClientParams, Entry } from 'contentful'
import { from, Observable } from 'rxjs'
import cvMock from '../mock/cv.json'
import { CV_old } from '../models/cv'

const CONFIG: CreateClientParams = {
    space: 'bp893k004d65',
    accessToken: 'P0yhCtlkmn78L5wM3dSY39iE5JcKAfBxMtAwHKl_0ow',
}

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {

    protected client = createClient(CONFIG)

    constructor() { }

    getList<EntryType>(title: string): Observable<EntryType[]> {
        return from(this.client.getEntries<{
            title: string,
            references: Entry<any>[]
        }>({
            content_type: 'list',
            'fields.title[match]': title
        }).then(res => {
            const result = res?.items?.[0]?.fields
            if (result) {
                return result.references.map(e => e.fields)
            } else {
                return []
            }
        }).catch(() => []))
    }
}
