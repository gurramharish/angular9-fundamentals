import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const resolvedData = this.route.snapshot.data.resolvedPosts;
    if (resolvedData instanceof Error) {
      console.log('Error ::: ', resolvedData);
    } else {
      this.posts = resolvedData;
    }
  }
}
