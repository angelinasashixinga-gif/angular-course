import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;

}

@Component({
  selector: 'app-sobre',
  // imports: [RouterLink, NgClass],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {


  characters = signal<Character[]>([
    { id: 1, name: 'Angelina', power: 9001 },
    { id: 2, name: 'Ange', power: 8000 },
    { id: 4, name: 'Angel', power: 500 },
    { id: 3, name: 'Lina', power: 3000 },
    
  ]);

//   powerClasse = computed(() => {
//      return { 
//      'text-danger': true,
//    };
//  });


}
