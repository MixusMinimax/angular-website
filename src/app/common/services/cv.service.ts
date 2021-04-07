import { Injectable } from '@angular/core';
import { Asset } from 'contentful';
import { from, Observable } from 'rxjs';
import cvMock from '../mock/cv.json';
import { Image } from '../models/base';
import { CV } from '../models/cv';
import { ContentfulService } from './contentful.service';

@Injectable({
    providedIn: 'root'
})
export class CvService extends ContentfulService {

    getCV(name: string): Observable<CV> {
        return from(this.client.getEntries<{
            name: string,
            icon?: Asset,
            summary: string,
            content: string,
        }>({
            content_type: 'cv',
            'fields.name[match]': name
        }).then(res => {
            const result = res?.items?.[0]?.fields
            if (result) {
                return { ...result, icon: Image.fromAsset(result.icon) }
            } else {
                if (cvMock) {
                    return cvMock
                } else {
                    return null
                }
            }
        }).catch(() => null))
    }

    populateSections(cv: CV): void {
        cv.personalInfo ??= []
        cv.sections ??= []
        // TODO
    }
}
