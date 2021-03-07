import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { ProjectCard, ProjectsService } from '../common/projects.service'
import { ReplaceSpacesPipe } from '../pipes/replace-spaces.pipe'

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectPageComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
        private titleService: Title,
        private replaceSpaces: ReplaceSpacesPipe,
    ) { }

    projectCard: ProjectCard

    ngOnInit(): void {
        this.route.paramMap.subscribe(m => {
            this.projectsService.getProjects().subscribe(projects => {
                this.projectCard = projects.find(p => m.get('title') === this.replaceSpaces.transform(p.title, 'lower'))
                this.titleService.setTitle(`Maxi - ${this.projectCard?.title}`)
                console.log('Title:', this.projectCard?.title)
            })
        })
    }
}
