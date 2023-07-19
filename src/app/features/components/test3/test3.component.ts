import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component {

  public number = signal<number>(0);

  constructor(){}

  public onIncrese(){
    this.number.update( n => n+1);
  }

  public onDecrease(){
    this.number.update(n => n-1);
  }

}
