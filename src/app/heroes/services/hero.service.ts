import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/common-util/service';
import { Hero, HEROES } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private message: MessageService
    ) { }

  getHeroes(): Observable<Hero[]>{
    this.message.add('Hero Service - retriving the heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    let hero: Hero;
    return this.getHeroes().pipe(
      map((heroes:Hero[]) => heroes.find(hero => hero.id === id))
    );
  }
}
