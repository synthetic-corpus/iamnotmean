import { FormattedPost } from '../models/types';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class PostService {
  private posts: FormattedPost[] = [];
  private postsUpdated = new Subject<FormattedPost[]>()

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{message: string, posts: any[]}>('http://localhost:8080/api/posts')
      .pipe(map((postData) => {
          return postData.posts.map(item => {
            return {
              title: item.title,
              content: item.content,
              id: item._id
            }
          })
      }))
      .subscribe((convertedPosts)=> {
        this.posts = convertedPosts;
        this.postsUpdated.next([...this.posts])
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: FormattedPost = {
      id: null,
      title,
      content
    }
    this.http.post<{message: string}>('http://localhost:8080/api/posts', post)
      .subscribe((reply)=>{
        console.log(reply.message)
        this.posts.push(post)
        this.postsUpdated.next([...this.posts])
      })
  }

  deletePost(postId: string){
    this.http.delete('http://localhost:8080/api/posts/' + postId)
      .subscribe(() => {
        console.log("Deleted asset " + postId)
        const updatedPosts = this.posts.filter((post)=> post.id !== postId)
        this.postsUpdated.next([...updatedPosts])
      })
  }
}
