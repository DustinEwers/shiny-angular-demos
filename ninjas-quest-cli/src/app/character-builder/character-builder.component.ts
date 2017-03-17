import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.css']
})
export class CharacterBuilderComponent {
    public name: string;
    public weapon: string;

    public weapons: SelectItem[];

    constructor(private game: GameService, private router: Router) {
        this.weapons = [];
        this.weapons.push({label:'Select Weapon', value:null});
        this.weapons.push({label:'Sword', value:'sword'});
        this.weapons.push({label:'Ninja Star', value:'ninja-star'});
    }

    buildCharacter() {
        this.game.createCharacter(this.name, this.weapon);
        this.router.navigate(['home']);
        return false;
    }
}
