import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponet } from './list/list.component';



@NgModule({
  declarations: [
    UserListComponet
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    UserListComponet
  ]
})
export class UserModule { }
