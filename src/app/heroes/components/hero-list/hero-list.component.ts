import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models';
import { HeroService } from '../../services';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

    heroes$: Observable<Hero[]>;
    selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get("id");
        return this.service.getHeroes();
      })
    );
  }

}
