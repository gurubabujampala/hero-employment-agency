import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent, HeroDetailComponent } from './components';

const herosRoutes: Routes = [
  {
    path:'heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' }
  },
  {
    path:'hero/:id',
    component: HeroDetailComponent,
    data: { animation: 'hero'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(herosRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
