import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";
import { CharacterListComponent } from "../component/dragonball/character-list/character-list.component";
import type { Character } from '../interfaces/character.interface';
import { CharacterAddComponet } from '../dragonBall/Character-add/Character-add.componet';



@Component({
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './sobre.css',
  selector: 'drangonball-super',
  imports: [CharacterListComponent, CharacterAddComponet],
})
export class dragonballSuperPageComponent {

  name = signal('');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    
  ]);


addCharacter(character: Character) {
this.characters.update(
  list => [...list, character]
)
}
resetFields() {
  this.name.set('');
  this.power.set(0);
}
}
