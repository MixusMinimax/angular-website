import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { ProjectCard } from '../common/models/project-card'
import { ProjectsService } from '../common/services/projects.service'

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectPageComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
        private titleService: Title,
    ) { }

    projectCard: ProjectCard
    width: number

    ngOnInit(): void {
        this.route.paramMap.subscribe(m => {
            this.projectsService.getProject(m.get('title')).subscribe(project => {
                if (!project)
                    this.router.navigate(['/not-found'])
                this.projectCard = project
                this.titleService.setTitle(`Maxi - ${this.projectCard?.title ?? '...'}`)
            })
        })
        this.onResize()
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: any): void {
        this.width = (event?.target || window).innerWidth
    }

    isMobile(): boolean {
        return this.width < 1200
    }
}
