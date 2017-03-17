import { Injectable } from '@angular/core';
import * as Game from './models/game';

@Injectable()
export class GameService {
    private hero: Game.Hero;
    private message: string;

    createCharacter(name: string, weapon: string) {
        this.hero = new Game.Hero();

        this.hero.name = name;
        this.hero.health = Game.Dice.rollDice(10, 3, 2);
        this.hero.maxHealth = this.hero.health;
        this.hero.money = 0;
        this.hero.badGuysKilled = 0;

        switch (weapon) {
            case 'sword':
                this.hero.weapon = new Game.Sword('Generic Samaurai Sword', 'A Generic Samaurai Sword', Game.SwordQuality.Decent);
                break;
            case 'ninja-star':
                this.hero.weapon = new Game.NinjaStar('Ninja Stars', 'They\'re quite pointy...', 1);
                break;
            default:
                this.hero.weapon = new Game.Sword('Vorpal Samaurai Sword',
                  'A vorpal Samaurai Sword. It silently goes snicker-snack!',
                  Game.SwordQuality.Awesome);
                break;
        }
    }

    getHero(): Game.Hero {
        return this.hero;
    }

    setMessage(msg: string): void {
        this.message = msg;
    }

    getAndClearMessage(): string {
        const msg = this.message;
        this.message = null;
        return msg;
    }
}