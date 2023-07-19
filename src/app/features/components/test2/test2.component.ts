import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  public firstName = signal<string>('Variya');
  public lastName  = signal<string>('Vishal');
  public fullName = computed<string>(()=> this.firstName() + ' ' + this.lastName());
  
  constructor(){}

  public onChangeFirstName(fname:string){
    console.log('fname :>> ', fname);
    this.firstName.set(fname)
  }

  public onChangeLastName(lname :string){
    console.log('lname :>> ', lname);
    this.lastName.set(lname);
  }
}
