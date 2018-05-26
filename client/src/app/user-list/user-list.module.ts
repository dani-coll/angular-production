import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserCellComponent } from './components/user-cell/user-cell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserListComponent, pathMatch: 'full'}
    ]),
    FormsModule
  ],
  declarations: [
    UserListComponent,
    SearchBarComponent,
    UserCellComponent
  ]
})
export class UserListModule { }
