import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Character {
  id: number;
  name: string;
  power: number;

}

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {

  characters = signal<Character[]>([
    { id: 1, name: 'Angelina', power: 9001 },
    { id: 2, name: 'Ange', power: 8000 },
    { id: 3, name: 'Lina', power: 3000 },
  ]);


}
