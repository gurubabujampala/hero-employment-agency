import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent, HeroDetailComponent } from './components';
import { HeroService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeroesRoutingModule
  ],
  providers:[
    HeroService
  ]
})
export class HeroesModule { }
