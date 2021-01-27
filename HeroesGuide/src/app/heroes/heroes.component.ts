import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windsstorm'
  };
  heroes?: Hero[];
  size: Number = 16;
  number: Number = 0;

  selectH?: Hero;

  des = () => {
    this.number = +this.number + 1;
  };
  esc = () => {
    this.number = +this.number - 1;
  };
  onChange(newValue: string) {
    console.log(newValue);
    this.hero.name = newValue; // don't forget to update the model here
    // ... do other stuff here ...
  }

  selectHero = (hero: Hero) => {
    this.hero = hero;
  };
  onSelect(hero: Hero): void {
    this.selectH = hero;
  }
  constructor(private heroService: HeroService) {
    console.log(1);
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  todayDate: any;

  ngOnInit() {
    this.getHeroes();
    console.log(2);
  }
}
