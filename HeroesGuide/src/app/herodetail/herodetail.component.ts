import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  hero!: Hero;

  ngOnInit(): void {
    console.log(this.hero);
    this.getHero();
  }
  goback(): void {
    this.location.back();
  }
  getHero = (): void => {
    const id = +this.route.snapshot.params.id;
    if (id !== NaN) {
      this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
    }
  };
  getH() {
    this.heroService.getH().subscribe(hero => console.log(hero));
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goback());
  }
}
