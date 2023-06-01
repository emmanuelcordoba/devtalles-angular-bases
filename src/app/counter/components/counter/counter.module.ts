import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.compontent';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
