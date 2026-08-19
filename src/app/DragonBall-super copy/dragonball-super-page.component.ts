import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;

}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './sobre.css',
})
export class dragonballSuperPageComponent {

  name = signal('Carlos');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    
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
