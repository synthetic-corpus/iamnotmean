import { FormattedPost } from '../models/types';

export class PostService {
  private posts: FormattedPost[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string){
    const post: FormattedPost = {
      title,
      content
    }
    this.posts.push(post)
  }
}
