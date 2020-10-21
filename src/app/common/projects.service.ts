import { Injectable } from '@angular/core'
import { Asset, RichTextContent } from 'contentful'
import { Observable, scheduled } from 'rxjs'
import { asap } from 'rxjs/internal/scheduler/asap'
import { ContentfulService } from './contentful.service'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export interface ProjectCard {
    title: string,
    preview: string,
    description: { short: string, full: string },
    links?: {
        code?: string,
        game?: string,
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProjectsService extends ContentfulService {

    getProjects(): Observable<ProjectCard[]> {
        console.log('getProjects')
        return scheduled((async () => {
            const ret = (await this.client.getEntries<{
                title: string,
                preview: Asset,
                shortDescription: RichTextContent,
                fullDescription: RichTextContent,
                codeSource: string,
                gameSource: string
            }>({ content_type: 'projectCard' })).items.map(entry => {
                const fields = entry.fields
                return {
                    title: fields.title,
                    preview: fields.preview.fields.file.url,
                    description: {
                        short: documentToHtmlString(fields.shortDescription as any),
                        full: documentToHtmlString(fields.fullDescription as any)
                    },
                    links: {
                        code: fields.codeSource,
                        game: fields.gameSource
                    }
                }
            })
            // console.log(ret)
            return ret
        })(), asap)
    }
}
