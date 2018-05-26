import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-cell',
  templateUrl: './user-cell.component.html',
  styleUrls: ['./user-cell.component.less']
})
export class UserCellComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
