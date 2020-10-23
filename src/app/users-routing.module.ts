import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = [

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
