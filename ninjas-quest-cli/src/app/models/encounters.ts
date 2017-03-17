import { Monster } from "./characters";
import { Claws, Sword, SwordQuality } from "./weapons";

    function getRandomRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export class MonsterFactory {
        static getMonster(): Monster {
            var rand = Math.floor(Math.random() * 3);
            switch (rand) {
                case 0:
                    return new Monster("Large Rat", () => getRandomRange(1, 5), new Claws(() => getRandomRange(2, 4)));
                case 1:
                    return new Monster("Bat", () => getRandomRange(1, 3), new Claws(() => 1));
                case 2:
                    return new Monster("Drunken Rival Ninja", () => getRandomRange(3, 10), new Sword("Rusty Sword", "Not the best, really", SwordQuality.Janky));
            }
        }
    }