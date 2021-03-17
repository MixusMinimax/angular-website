import { LayoutModule } from '@angular/cdk/layout'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatCarouselModule } from '@ngbmodule/material-carousel'
import { MathJaxModule } from 'ngx-mathjax'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MdToHtmlPipe } from './common/pipes/md-to-html.pipe'
import { NewlineToBreakPipe } from './common/pipes/newline-to-break.pipe'
import { ReplaceSpacesPipe } from './common/pipes/replace-spaces.pipe'
import { ToSafeHtmlPipe } from './common/pipes/to-safe-html.pipe'
import { YoutubeExtractIDPipe } from './common/pipes/youtube-extract-id.pipe'
import { CvComponent } from './cv/cv.component'
import { ThemeToggleComponent } from './elements/theme-toggle/theme-toggle.component'
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ProjectPageComponent } from './project-page/project-page.component'
import { ProjectsComponent } from './projects/projects.component'
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component'

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        CvComponent,
        MdToHtmlPipe,
        NewlineToBreakPipe,
        ProjectsComponent,
        ProjectPageComponent,
        ReplaceSpacesPipe,
        ThemeToggleComponent,
        YoutubeVideoComponent,
        YoutubeExtractIDPipe,
        ToSafeHtmlPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        FlexLayoutModule,
        FontAwesomeModule,

        // Material:
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatCarouselModule,
        MatButtonModule,

        MathJaxModule.forRoot({
            version: '2.7.5',
            config: 'TeX-AMS_HTML',
            hostname: 'cdnjs.cloudflare.com',
        }),
    ],
    providers: [
        YoutubeExtractIDPipe,
        ReplaceSpacesPipe,
        ToSafeHtmlPipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
