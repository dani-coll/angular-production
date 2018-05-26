import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  searchText = '';
  isLoading = false;
ç  @Output() onSearch: EventEmitter<User[]> = new EventEmitter();

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchText = this._activatedRoute.snapshot.queryParams['q'];
    if (this.searchText) {
      this.getUsers();
    }
    this._activatedRoute.params.subscribe(params => {
      if (params.q) {
        this.searchText = params.q;
        this.getUsers();
      }
    });

  }

  onValueChanged() {
    if (this.searchText === '') {
      this.onSearch.emit(undefined);
    }
    this._router.navigate(['.'], { queryParams: { q: this.searchText } });
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this._apiService.getUsers(this.searchText).then( users => {
      this.isLoading = false;
      this.onSearch.emit(users);
    }).catch( () => {
      this.isLoading = false;
    });
  }

}
