import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../../services';
import { Observable } from 'rxjs';
import { Hero } from '../../models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
         this.service.getHero(+params.get('id'))       
      )
    );
    
    //use snapshot
    // const id = this.route.snapshot.paramMap.get("id");
    // console.log(id);
    // this.hero$ = this.service.getHero(+id);
  }

  ngOnDestroy(){
    //un subscribe
  }

  gotoHeroes(hero: Hero) {

    this.router.navigate(['/heroes', { id: hero.id, foo: 'foo' }]);
  }

}
