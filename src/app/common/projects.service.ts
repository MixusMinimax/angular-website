import { Injectable } from '@angular/core'

export interface ProjectCard {
    title: string,
    image: string,
    description: { short: string, full: string },
    links?: {
        code?: string,
        game?: string,
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor() { }

    getProjects(): ProjectCard[] {
        return [
            {
                title: 'Website',
                description: {
                    short: 'My website.',
                    full: 'My website is written with Angular.'
                },
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                links: {
                    code: 'https://github.com/MixusMinimax/angular-website'
                }
            },

            ...[{
                title: 'Nonogram',
                description: {
                    short: 'This is a **game**.\nSecond Line\nThird line aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa This should be invisible\nFourth',
                    full: 'This is a **longer description** that will go on the page.'
                },
                image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
            }].map(e => [e, e, e, e, e, e, e, e, e])[0],
        ]
    }
}
