import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import * as utils from '../../utils/string'
import { ProjectCard, ProjectsService } from '../common/projects.service'
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

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

    constructor(
        private projectsService: ProjectsService
    ) { }

    ngOnInit(): void { }

    get projects(): ProjectCard[] {
        return this.projectsService.getProjects()
    }

    openLink(link: string): void {
        window.open(link)
    }
}
