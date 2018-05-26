import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
  }

  loadUsers(users) {
    this.users = users;
  }

}
