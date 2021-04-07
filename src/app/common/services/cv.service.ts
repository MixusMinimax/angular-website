import { Injectable } from '@angular/core';
import { Asset } from 'contentful';
import { from, Observable } from 'rxjs';
import cvMock from '../mock/cv.json';
import { Image } from '../models/base';
import { CV, CVLine } from '../models/cv';
import { ContentfulService } from './contentful.service';

interface CVData {
    name: string,
    icon?: Asset,
    summary: string,
    content: string,
}

@Injectable({
    providedIn: 'root'
})
export class CvService extends ContentfulService {

    getCV(name: string): Observable<CV> {
        return from(this.client.getEntries<CVData>({
            content_type: 'cv',
            'fields.name[match]': name
        }).then(res => {
            let data = res?.items?.[0]?.fields
            let cv: CV = null
            data ??= cvMock as unknown as CVData
            if (data) {
                cv = this.convertDataToCV(data)
            }
            return cv
        }).catch(() => null))
    }

    private convertDataToCV(data: CVData): CV {
        let cv: CV = {} as CV

        cv.name = data.name
        cv.icon = Image.fromAsset(data.icon)
        cv.personalInfo = this.parseCVLines(data.summary.split('\n'))
        cv.sections = []

        let exp = /## ([^\n]+)(?:$|\n((?:(?:[^#\n][^\n]*)?(?:\n|$))*))/g
        let match: RegExpExecArray
        while (match = exp.exec(data.content)) {
            if (match.length < 3) continue
            let title = match[1]
            let sectionLines = match[2]
            cv.sections.push({
                title,
                lines: this.parseCVLines(sectionLines.split('\n'))
            })
        }
        return cv
    }

    private parseCVLines(lines: string[]): CVLine[] {
        let ret: CVLine[] = []
        for (let line of lines) {
            if (!line.match(/^ *- .+$/)) continue

            let indentation = line.match(/^ */)[0].length / 2
            if (indentation == 0) {
                ret.push({ title: line.match(/^ *- (.*)$/)[1], body: '' })
            } else {
                let str = line.match(/^ *- (.*)$/)[1]
                let i = ret.length - 1
                if (ret[i].body) ret[i].body += '\n'
                ret[i].body += str
            }
        }
        return ret
    }
}
