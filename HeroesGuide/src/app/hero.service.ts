import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }

  // getHeroDetail(id): Hero {
  //   let detail: Hero = HEROES.find(x => x.id === id);

  //   return detail;
  // }
}
