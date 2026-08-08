import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Dashboard {
  name = 'Angelina';
  
  counter = 10;
  counterSignal = signal(10);

  constructor(){
    setInterval(() => {
      //this.counter += 1;
      console.log('Tick');
    }, 2000);
  }


  increaseBY(value: number) {
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 100; 
    this.counterSignal.set(100);
  }
  

}
