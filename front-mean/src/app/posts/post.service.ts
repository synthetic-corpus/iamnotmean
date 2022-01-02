import { FormattedPost } from '../models/types';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class PostService {
  private posts: FormattedPost[] = [];
  private postsUpdated = new Subject<FormattedPost[]>()

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: FormattedPost[]}>('http://localhost:8080/api/posts')
      .subscribe((body)=> {
        this.posts = body.posts;
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
}
