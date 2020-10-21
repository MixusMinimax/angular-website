import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CvComponent } from './cv/cv.component'
import { HomeComponent } from './home/home.component'
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
