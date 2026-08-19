import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-sabermais',
  imports: [UpperCasePipe, TitleCasePipe],
  templateUrl: './DragonBallPage.html',
  styleUrl: './DragonBallPage.css',
})
export class Sabermais {

  name = signal('Ironman');
  age = signal(45);
  gender = signal('female');
  nome2 = "Ange"  
  

  sabermaisDesciption = computed(() => {
    const description = `${this.name()} - ${this.age}`;
    return description;
  })

  capilizedName = computed(() => this.name().toUpperCase);

  getsabermaisDescription() {
    return `${this.name()} - ${this.age()} - ${this.gender()}`;
  }

  changesabermais() {
    this.name.set( 'Spiderman' )
    this.age.set(22)
    this.gender.set( 'male' )
  }

  changeAge() {
    this.age.set(68);
  }

  resetForm() {
    this.name.set( 'ironman' )
    this.age.set(45)
    this.gender.set( 'female' )
  }
  changename() {
    this.name.set( 'Spiderman' )
  }
    getgenderDescription() {
      return this.gender();
    }
  
   change_name(){
    this.nome2 = 'Bernado';
   }
    
}
