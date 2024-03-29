import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormattedPost } from '../../models/types';
import { PostService } from '../post.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: FormattedPost[] = []
  private postsSub: Subscription;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts) => {
        this.posts = posts
      })
  }

  onDelete(postId: string): void {
    this.postService.deletePost(postId)
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe()
  }

}
