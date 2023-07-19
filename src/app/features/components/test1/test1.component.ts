import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  public firstName : string = 'Variya';
  public lastName : string = 'Vishal';
  public fullName !: string;
  
  constructor(){
    this.fullName = this.firstName + " " + this.lastName;
  }

  public onChangeFirstName(fname:string){
    console.log('fname :>> ', fname);
    this.firstName = fname;
  }

  public onChangeLastName(lname :string){
    console.log('lname :>> ', lname);
    this.lastName = lname;
  }
}
