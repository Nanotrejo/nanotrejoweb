import { GastronomyComponent } from './shared/about/gastronomy/gastronomy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './shared/about/music/music.component';
import { CheatsheetComponent } from './shared/about/cheatsheet/cheatsheet.component';
import { TrickComponent } from './shared/about/cheatsheet/trick/trick.component';
import { CuriositiesComponent } from './shared/about/cheatsheet/curiosities/curiosities.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'music',
        component: MusicComponent,
      },
      {
        path: 'cheatsheet',
        component: CheatsheetComponent,
      },
    ],
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'cheatsheet',
    component: CheatsheetComponent,
  },
  {
    path: 'gastronomy',
    component: GastronomyComponent,
  },
  {
    path: 'trick/:id',
    component: TrickComponent
  },
  {
    path: 'curiositie/:id',
    component: CuriositiesComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
