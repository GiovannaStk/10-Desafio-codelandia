import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AnimeComponent } from './views/anime/anime.component';

import { NewsTopComponent } from './components/news-top/news-top.component';
import { AsideNewsComponent } from './components/aside-news/aside-news.component';
import { BottomNewsComponent } from './components/bottom-news/bottom-news.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SerieComponent } from './views/serie/serie.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    AnimeComponent,
    NewsTopComponent,
    AsideNewsComponent,
    BottomNewsComponent,
    NotFoundComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
