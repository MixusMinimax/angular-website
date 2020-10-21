import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProjectsService } from '../common/projects.service'

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(m => console.log('Title:', m.get('title')))
    }
}
