import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tick',
  imports: [],
  templateUrl: './tick.html',
  styleUrl: './tick.css',
  // changeDetection: ChangeDetectionStrategy. OnPush,
})
export class Tick {
  
  counter = 1;
  counterSignal = signal(1);
  preco = signal(6000);
  quantidade = signal(2);
  
  total = computed(() => {
    return this.preco () * this.quantidade()
   });

  constructor() {
    setInterval(() => {
      this.counterSignal.update(current => current +1) ;
      console.log('tick');
      }, 60000)
  }

  increaseBy(value:number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current +value);
  }
  resetCounter() {
    this.counter = 100
    this.counterSignal.set(100)
  }
}


