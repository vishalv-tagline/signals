import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './features/components/test1/test1.component';

const routes: Routes = [
  {
    path:'',
    component:Test1Component
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
