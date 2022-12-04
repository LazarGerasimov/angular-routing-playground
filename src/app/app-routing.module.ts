import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';
import { UserListComponet } from './user/list/list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/user-list'
  },
  {
    path: 'user-list',
    component: UserListComponet
  },
  {
    path: 'post-list',
    component: PostListComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
