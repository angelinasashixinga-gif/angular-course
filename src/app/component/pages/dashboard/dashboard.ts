import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  counter = 0;
  name = 'Angelina';
  
  increase(num: number){
    this.counter = num + this.counter;
  }
}
