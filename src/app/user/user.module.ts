import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponet } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    UserListComponet,
    DetailComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    UserListComponet
  ]
})
export class UserModule { }
