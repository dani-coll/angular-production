import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserCellComponent } from './components/user-cell/user-cell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserListComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    UserListComponent,
    SearchBarComponent,
    UserCellComponent
  ]
})
export class UserListModule { }
