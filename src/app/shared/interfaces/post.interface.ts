import { Comment } from './comment.interface';
export interface Post {
  postId: number;
  postTitle: string;
  description: string;
  comments: Comment[];
}
