import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces/post.interface';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) { }
  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.posts$ = this.postsService.getAllPosts();
  }
}
