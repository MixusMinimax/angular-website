import { Injectable } from '@angular/core'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Asset, RichTextContent } from 'contentful'
import { from, Observable } from 'rxjs'
import { ContentfulService } from './contentful.service'

export interface ProjectCard {
    title: string,
    preview: string,
    trailer?: string,
    description: { short: string, full: string },
    gallery: { title: string, description: string, url: string }[]
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
        return from((async () => {
            const ret = (await this.client.getEntries<{
                title: string,
                preview: Asset,
                trailer?: string,
                shortDescription: RichTextContent,
                fullDescription: RichTextContent,
                gallery: Asset[],
                codeSource: string,
                gameSource: string
            }>({ content_type: 'projectCard' })).items.map(entry => {
                const fields = entry.fields
                return {
                    title: fields.title,
                    preview: fields.preview.fields.file.url,
                    trailer: fields.trailer,
                    description: {
                        short: documentToHtmlString(fields.shortDescription as any),
                        full: documentToHtmlString(fields.fullDescription as any)
                    },
                    gallery: (fields.gallery ?? []).map(asset => ({
                        title: asset.fields.title,
                        description: asset.fields.description,
                        url: asset.fields.file.url
                    })),
                    links: {
                        code: fields.codeSource,
                        game: fields.gameSource
                    }
                }
            })
            // console.log(ret)
            return ret
        })())
    }
}
