import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { ProjectCard, ProjectsService } from '../common/services/projects.service'
import { ReplaceSpacesPipe } from '../common/pipes/replace-spaces.pipe'

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
    width: number

    ngOnInit(): void {
        this.route.paramMap.subscribe(m => {
            this.projectsService.getProjects().subscribe(projects => {
                this.projectCard = projects.find(p => m.get('title') === this.replaceSpaces.transform(p.title, 'lower'))
                this.titleService.setTitle(`Maxi - ${this.projectCard?.title}`)
            })
        })
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: any): void {
        this.width = (event?.target || window).innerWidth
    }

    isSlim(): boolean {
        return this.width < 700
    }
}
