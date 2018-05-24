import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ':id', component: UserDetailComponent}
    ]),
  ],
  declarations: [UserDetailComponent]
})
export class UserDetailModule { }
