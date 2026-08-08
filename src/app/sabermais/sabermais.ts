import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sabermais',
  imports: [RouterLink, UpperCasePipe, TitleCasePipe],
  templateUrl: './sabermais.html',
  styleUrl: './sabermais.css',
})
export class Sabermais {

  name = signal('Lina');
  age = signal(45);
  gender = signal('female');

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
    this.age.set(68)
  }

  resetForm() {
    this.name.set( 'Angeliana' )
    this.age.set(45)
    this.gender.set( 'female' )
  }
  changename() {
    this.name.set( 'Spiderman' )
  }
    getgenderDescription() {
      return this.gender();
    }
  
    
}
