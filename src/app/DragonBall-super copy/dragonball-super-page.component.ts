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



}
