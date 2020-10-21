import { Component, OnInit } from '@angular/core'

interface ProjectCard {
    title: string,
    image: string,
    description: { short: string, full: string },
    gameSource?: string
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    get projects(): ProjectCard[] {
        return [{
            title: 'Nonogram',
            description: {
                short: 'This is a **game**.',
                full: 'This is a **longer description** that will go on the page.'
            },
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        }]
    }
}
