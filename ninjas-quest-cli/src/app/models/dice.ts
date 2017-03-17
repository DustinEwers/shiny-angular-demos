export class Dice {
    public static rollDice(sides: number, times: number, modifier: number = 0): number {
        var ret = 0;
        for (var i = 0; i < times; i++) {
            ret += Math.floor((Math.random() * sides) + modifier);
        }
        return ret;
    }
}