import { Injectable } from '@angular/core'
import { Asset } from 'contentful'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Image } from '../models/base'
import { ProjectCard } from '../models/project-card'
import { ContentfulService } from './contentful.service'

@Injectable({
    providedIn: 'root'
})
export class ProjectsService extends ContentfulService {

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
