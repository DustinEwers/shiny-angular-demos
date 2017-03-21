import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, Monster, MonsterFactory } from "../models/game";
import { GameService } from "../game.service";

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
    hero: Hero;
    monster: Monster;
    actionMessage: string;

    constructor(private game: GameService, private router: Router) { }

    ngOnInit(): void {
        this.hero = this.game.getHero();
        this.monster = MonsterFactory.getMonster();
        this.actionMessage = "You have encountered a vicious monster, what do you do now?";
    }

    attack(): void {
        var heroDamage = this.hero.weapon.getDamage();
        var monsterDamage = this.monster.weapon.getDamage();

        this.hero.attack(monsterDamage);
        this.monster.attack(heroDamage);

        if (this.hero.isDead()) {
            this.hero.money = 0;
            this.hero.health = this.hero.maxHealth;
            this.game.setMessage('You got knocked out and have woken up at your base. You lost all of your money. Bummer...');
            this.router.navigate(['/home']);
            
            return;
        }

        if (this.monster.isDead()) {
            var reward = this.monster.reward();

            this.hero.money = this.hero.money + reward.money;
            this.hero.badGuysKilled++;

            this.game.setMessage(`You have been dealt ${monsterDamage} damage. ${reward.message} You return to base victorious. You also gained $${reward.money.toFixed(2)}`);
            this.router.navigate(['/home']);
        }

        this.actionMessage = `You have been dealt ${monsterDamage} damage. You dealt ${heroDamage} to the ${this.monster.name}. What would you like to do?`;
    }

    runAway(): void {
        this.game.setMessage('You bravely ran away');
        this.router.navigate(['/home']);
    }
}

