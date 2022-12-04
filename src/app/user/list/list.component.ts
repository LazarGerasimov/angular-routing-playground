import { Component, OnInit } from '@angular/core';

import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private globalLoader: GlobalLoaderService
  ) { }

  ngOnInit(): void {

  }
}
