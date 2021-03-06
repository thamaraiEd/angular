import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 // hero property must be an Input property, annotated with the @Input() decorator,
 // because the external HeroesComponent will bind to it like this.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 // old @Input() hero: Hero;//@Input() hero; this also enough
 // heroesy: Hero;
  hero: Hero;

  constructor( private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }
  /* getHeroes(): void {
    this.heroesy = this.heroService.getHeroes(); //w/o  = this.heroService.getHeroes() also it runs
  } */
  ngOnInit() {
    this.getHero();
  }
  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
