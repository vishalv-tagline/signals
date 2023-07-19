import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component {

  public studentsData = signal<any[]>([
    {rno:101,first_name:'Variya',last_name:'Vishal'},
    {rno:102,first_name:'Tank',last_name:'Parag'},
    {rno:103,first_name:'Gupta',last_name:'Raj'},
    {rno:104,first_name:'Panay',last_name:'Tan'},
    {rno:105,first_name:'Sharma',last_name:'Man'},
  ]);

  public studentForm!:FormGroup;
  private fb = inject(FormBuilder)

  constructor(){
    this.studentForm = this.fb.group({
      rno:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required]
    })
  }

  public onSubmit(){
    if(this.studentForm.invalid){
      console.log('1213 :>> ', 1213);
      return 
    }
    console.log('this.studentForm.value :>> ', this.studentForm.value);
    this.studentsData.mutate((data:any)=>{
      data.push(this.studentForm.value);
    });
  }
}