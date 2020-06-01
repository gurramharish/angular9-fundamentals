import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../shared/interfaces/post.interface';
import { PostsService } from './posts.service';
import { PostsModule } from './posts.module';

@Injectable({ providedIn: 'root' })
export class PostsResolverService implements Resolve<Post[]>{

  constructor(private postService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getAllPosts();
  }

}
