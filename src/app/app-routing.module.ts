import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CvComponent } from './cv/cv.component'
import { HomeComponent } from './home/home.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectPageComponent } from './project-page/project-page.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'projects', component: ProjectsComponent },
    {
        path: 'projects/:title',
        children: [
            { path: '', component: ProjectPageComponent, },
            {
                path: 'doc',
                children: [{ path: '**', component: CvComponent, }]
            },
        ]
    },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
