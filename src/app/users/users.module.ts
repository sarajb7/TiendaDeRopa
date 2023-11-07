import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form/users-form.component';



@NgModule({
  declarations: [
    UsersFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersFormComponent
  ]
})
export class UsersModule { }
