import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
 // import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}




// export class HerosComponent implements OnInit {
// heroo = 'Super star';
// heroes = HEROES;//define a component property called heroes to expose the HEROES array for binding.
/*hero: Hero={
  id:1,
  name:'Rajini'
};*/
/* v2selectedHero: Hero;
heroes = HEROES;
constructor(private heroService: HeroService, private messageService: MessageService) { }

ngOnInit() {
   this.getHeroes();
}
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
} v2*/
/*  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  } //old
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}*/

// }
