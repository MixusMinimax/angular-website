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
import { MatCarouselModule } from '@ngbmodule/material-carousel'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CvComponent } from './cv/cv.component'
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component'
import { MdToHtmlPipe } from './common/pipes/md-to-html.pipe'
import { NewlineToBreakPipe } from './common/pipes/newline-to-break.pipe'
import { ReplaceSpacesPipe } from './common/pipes/replace-spaces.pipe'
import { ProjectPageComponent } from './project-page/project-page.component'
import { ProjectsComponent } from './projects/projects.component';
import { ThemeToggleComponent } from './elements/theme-toggle/theme-toggle.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeExtractIDPipe } from './common/pipes/youtube-extract-id.pipe'
import { MathJaxDirective, MathJaxModule } from 'ngx-mathjax';
import { ToSafeHtmlPipe } from './common/pipes/to-safe-html.pipe'

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
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        FontAwesomeModule,
        MatCarouselModule,
        MathJaxModule.forRoot({
            version: '2.7.5',
            config: 'TeX-AMS_HTML',
            hostname: 'cdnjs.cloudflare.com'
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
