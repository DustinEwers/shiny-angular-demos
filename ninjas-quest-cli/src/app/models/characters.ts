
import { IWeapon } from "./weapons";

    export class Character {
        public health: number;
        public maxHealth: number;

        public name: string;
        public weapon: IWeapon;

        public attack(damage: number) {
            this.health -= damage;
        }

        public isDead(): boolean{
            return this.health <= 0;
        }
    }

    export class Hero extends Character {
        public badGuysKilled: number;
        public money: number;
        public maxHealth: number;
    }

    export class Monster extends Character {
        constructor(_name: string, _health: ()=> number, _weapon: IWeapon) {
            super();
            this.name = _name;
            this.weapon = _weapon;
            this.health = _health();
        }

        reward(): any {
            return {
                money: Math.floor((Math.random() * 10) * 2),
                message : `${this.name} dies a horrible death`
            };
        }
    }