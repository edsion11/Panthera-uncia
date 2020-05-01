import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeros();
  }
  getHeros(): void {
    this.heroService.getHeros().subscribe((heros) => {
      this.heroes = heros;
    });
  }
}
