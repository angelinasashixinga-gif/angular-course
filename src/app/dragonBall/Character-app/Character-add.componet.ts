import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  templateUrl: './Character-add.componet.html',
})
export class CharacterAddComponet {
  name = signal('');
  power = signal(0);


  addCharacter() {
  
    if (!this.name() || !this.power() || this.power() <=  6) {
      return;
    }
    const newCharacter:Character = {
     /*  id: this.characters().length + 1, */
      id: 100000,
      name: this.name(),
      power: this.power(),
    };
  
    /* this.character.update(
      (list) => [...list, newCharacter]); */
      console.log({ newCharacter });
      this.resetFields();
  
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
   
}