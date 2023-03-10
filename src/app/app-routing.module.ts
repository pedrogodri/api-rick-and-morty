import { ListEpisodeComponent } from './components/lists/list-episode/list-episode.component';

import { ListLocationComponent } from './components/lists/list-location/list-location.component';
import { DetailsComponent } from './components/details/details.component';
import { ListCharacterComponent } from './components/lists/list-character/list-character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'listCharacter', component: ListCharacterComponent},
  {path: 'listLocation', component: ListLocationComponent},
  {path: 'listEpisode', component: ListEpisodeComponent},
  {path: 'detail/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
