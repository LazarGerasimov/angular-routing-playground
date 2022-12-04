import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponet } from './list/list.component';
import { UserDetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    UserListComponet,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    UserListComponet
  ]
})
export class UserModule { }
