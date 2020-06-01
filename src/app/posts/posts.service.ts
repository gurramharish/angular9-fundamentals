import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/services/http-client.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces/post.interface';


const POSTS_URL = 'posts';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpService: HttpClientService) { }

  getAllPosts(): Observable<Post[]> {
    return this.httpService.get<Post[]>(POSTS_URL);
  }
}
