import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './posts.interfaces';

@Component({
  selector: 'app-post-request',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Post[]>(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    let post: Post = { title: input.value };
    input.value = '';

    this.http.post<Post>(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post: Post) {
    this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true}))
      .subscribe(response => {
        console.log(response);
      });
    // if you want to update the whole object use the put method
    // this.http.put(this.url, JSON.stringify({ isRead: true}));
  }

  deletePost(post: Post) {
    this.http.delete(`${this.url}/${post.id}`)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}