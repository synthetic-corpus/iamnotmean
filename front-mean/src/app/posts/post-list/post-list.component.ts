import { Component, OnInit, Input } from '@angular/core';
import { FormattedPost } from '../../models/types';
import { PostService } from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: FormattedPost[] = []

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
