import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
    hero: Hero;

    constructor(private game: GameService) { }

    ngOnInit(): void {
        this.hero = this.game.getHero();
    }
}
