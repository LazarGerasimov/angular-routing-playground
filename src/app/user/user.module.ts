import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponet } from './list/list.component';
import { UserDetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserListComponet,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponet
      },
      {
        path: 'user/details/:id',
        component: UserDetailComponent
      },
    ])
  ], 
  exports: [
    UserListComponet,
    UserDetailComponent
  ]
})
export class UserModule { }
