import { Component } from '@angular/core';
import { GithubFollowersService } from '../../services/github-followers.service';
import { Followers } from './github-followers.interfaces';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {
  followers: Followers[] = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe((followers) => (this.followers = followers));
  }
}
