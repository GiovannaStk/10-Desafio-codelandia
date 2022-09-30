import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AnimeComponent } from './views/anime/anime.component';
import { SerieComponent } from './views/serie/serie.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"serie",
  component: SerieComponent
},
{
  path:"movies",
  component: MoviesComponent
},
{
  path:"anime",
  component:AnimeComponent
},
{
  path: "NotFound",
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
