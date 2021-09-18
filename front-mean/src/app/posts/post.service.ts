import { FormattedPost } from '../models/types';
import { Subject } from 'rxjs';

export class PostService {
  private posts: FormattedPost[] = [];
  private postsUpdated = new Subject<FormattedPost[]>()

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: FormattedPost = {
      title,
      content
    }
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}
