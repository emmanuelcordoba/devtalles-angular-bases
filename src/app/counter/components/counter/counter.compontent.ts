import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Contador: {{ counter }}</p>
    <button (click)="increasyBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increasyBy(-1)">-1</button>`
})

export class CounterComponent {

  public counter: number = 0;

  constructor() { }

  increasyBy (value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 0;
  }


}
