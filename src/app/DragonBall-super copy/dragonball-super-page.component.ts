import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";
import { CharacterListComponent } from "../component/dragonball/character-list/character-list.component";
import type { Character } from '../interfaces/character.interface';
import { CharacterAddComponet } from '../dragonBall/Character-add/Character-add.componet';
import { DrangonballService } from '../service/dragonball.service';



@Component({
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './sobre.css',
  selector: 'drangonball-super',
  imports: [CharacterListComponent, CharacterAddComponet],
})
export class dragonballSuperPageComponent {
  

public dragonballService = inject (DrangonballService);

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    /* { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Piccolo', power: 3000 }, */

    
  ]);


addCharacter() {

  if (!this.name() || !this.power() || this.power() <=  6) {
    return;
  }
  const newCharacter:Character = {
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power(),
  };

  this.characters.update(
    (list) => [...list, newCharacter]);
    this.resetFields();

}
resetFields() {
  this.name.set('');
  this.power.set(0);
}

}




