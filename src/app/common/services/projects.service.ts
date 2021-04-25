import { Injectable } from '@angular/core'
import { Asset } from 'contentful'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Image } from '../models/base'
import { ProjectCard } from '../models/project-card'
import { ContentfulService } from './contentful.service'

@Injectable({
    providedIn: 'root'
})
export class ProjectsService extends ContentfulService {

    getProject(title: string): Observable<ProjectCard> {
        if (!title.match(/ /))
            title = title.replace(/-/g, ' ')
        return from(this.client.getEntries<{
            title: string,
            preview: Asset,
            trailer?: string,
            shortDescription?: string,
            fullDescription?: string,
            gallery: Asset[],
            codeSource: string,
            gameSource: string,
        }>({
            content_type: 'projectCard',
            'fields.title[match]': title
        }).then(res => {
            if (res.items.length > 0)
                return res.items[0]
            else
                throw new Error()
        }).then(res => ({
            title: res.fields.title,
            preview: res.fields.preview.fields.file.url,
            trailer: res.fields.trailer,
            description: {
                short: res.fields.shortDescription ?? '',
                full: res.fields.fullDescription ?? ''
            },
            gallery: (res.fields.gallery ?? []).map(Image.fromAsset),
            links: {
                code: res.fields.codeSource,
                game: res.fields.gameSource
            }
        })).catch(() => null))
    }

    getProjects(): Observable<ProjectCard[]> {
        return this.getList<{
            title: string,
            preview: Asset,
            trailer?: string,
            shortDescription?: string,
            fullDescription?: string,
            gallery: Asset[],
            codeSource: string,
            gameSource: string,
        }>('Projects').pipe(map(entries => {
            return entries.map(fields => ({
                title: fields.title,
                preview: fields.preview.fields.file.url,
                trailer: fields.trailer,
                description: {
                    short: fields.shortDescription ?? '',
                    full: fields.fullDescription ?? ''
                },
                gallery: (fields.gallery ?? []).map(Image.fromAsset),
                links: {
                    code: fields.codeSource,
                    game: fields.gameSource
                }
            }))
        }))
    }
}
