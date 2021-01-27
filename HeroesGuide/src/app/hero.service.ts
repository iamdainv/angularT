import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service : fetched heroes');
    return of(HEROES);
  }

  // getHeroDetail(id): Hero {
  //   let detail: Hero = HEROES.find(x => x.id === id);

  //   return detail;
  // }
}
