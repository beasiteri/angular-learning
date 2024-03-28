import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../shared/services/data.service';
import { Followers } from '../components/github-followers/github-followers.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService<Followers> {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}