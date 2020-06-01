import { Comment } from './comment.interface';
export interface Post {
  id: number;
  title: string;
  description: string;
  comments: Comment[];
}
