import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../models/repo';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  user: User = new User();
  followers: User[] = new Array<User>();
  repos: Repo[] = new Array<Repo>();
  isLoading = false;
  constructor(
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.username) {
        this.user = new User();
        this.followers = undefined;
        this.repos = undefined;
        this.isLoading = true;
        this._apiService.getUser(params.username).then( user => {
          this.user = user;
          this.isLoading = false;
          this._apiService.getUserFollowers(this.user.login)
          .then( (response) => this.followers = response.followers);
          this._apiService.getUserRepos(this.user.login)
          .then( (response) => this.repos = response.repos);
        });
      }
    });
  }
}

