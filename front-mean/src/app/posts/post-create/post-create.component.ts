import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }
  enteredTitle: string
  enteredContent: string
  onAddPost(newPostForm: NgForm): void {
    if (newPostForm.invalid){
      return
    }
    this.postService.addPost(
      newPostForm.value.enteredTitle,
      newPostForm.value.enteredContent)
  }

}
