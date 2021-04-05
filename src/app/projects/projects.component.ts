import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import * as utils from '../../utils/string'
import { ProjectCard } from '../common/models/project-card'
import { ProjectsService } from '../common/services/projects.service'

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {

    utils = utils
    faGitHub = faGithub
    faGitlab = faGitlab
    faCode = faCode

    projects: ProjectCard[] = []

    constructor(
        private projectsService: ProjectsService
    ) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe(projects => {
            console.log(projects)
            this.projects = projects
        })
    }

    openLink(link: string): void {
        window.open(link)
    }

    onCardChildClick(e: Event): void {
        e.stopPropagation()
    }
}
