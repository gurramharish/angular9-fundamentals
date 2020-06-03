import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/services/http-client.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces/post.interface';
import { TransformType } from '../shared/enums/transform-type.enum';


const POSTS_URL = 'posts';
const RENAME_OPTIONS = {
  post_id: 'postId',
  post_title: 'postTitle',
  cmnt_id: 'cmntId',
  user_name: 'userName'
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpService: HttpClientService) { }

  getAllPosts(): Observable<Post[]> {
    // return this.httpService.get<Post[]>(POSTS_URL);
    // return this.httpService.get<Post[]>(POSTS_URL, { type: TransformType.RENAME, options: RENAME_OPTIONS });
    return this.httpService.get<Post[]>(POSTS_URL, { type: TransformType.UNDERSCORE });
  }
}
