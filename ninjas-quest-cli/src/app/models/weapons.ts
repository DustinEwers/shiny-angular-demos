
    export interface IWeapon {
        name: string;
        description: string;
        getDamage(): number;
        attack(enemy: string): string;
    }
    
    export enum SwordQuality { Janky, Decent, Awesome }

    export class Sword implements IWeapon {
        name: string;
        description: string;
        quality: SwordQuality;

        constructor(_name: string, _description: string, _quality: SwordQuality) {
            this.name = _name;
            this.description = _description;
            this.quality = _quality;
        }

        getDamage(): number {
            var bonus = 0;
            switch (this.quality) {
                case SwordQuality.Janky:
                    bonus = 1;
                    break;
                case SwordQuality.Decent:
                    bonus = 2;
                    break;
                case SwordQuality.Awesome:
                    bonus = 5;
                    break;
            }

            //1d10 + quality
            return Math.floor((Math.random() * 10) + 1) + bonus;
        }

        attack(enemy: string): string {
            return `${this.name} slashes at the ${enemy}`;
        }
    }

    export class NinjaStar implements IWeapon {
        name: string;
        description: string;
        bonusDamage: number;

        constructor(_name: string, _description: string, _bonusDamage: number) {
            this.name = _name;
            this.description = _description;
            this.bonusDamage = _bonusDamage;
        }

        getDamage(): number {
            return Math.floor((Math.random() * 4) + 1) * 2 + this.bonusDamage;
        }

        attack(enemy: string): string {
            return `${this.name} slashes at the ${enemy}`;
        }
    }

    export class Claws implements IWeapon {
        name: string;
        description: string;
        private dmgFunction: () => number;

        constructor(damage: () => number) {
            this.name = "Claws";
            this.description = "Sharp Claws";
            this.dmgFunction = damage;
        }

        getDamage(): number {
            return this.dmgFunction();
        }

        attack(enemy: string): string {
            return `${this.name} slashes at the ${enemy}`;
        }
    }