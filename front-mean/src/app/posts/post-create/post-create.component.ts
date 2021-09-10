import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormattedPost } from '../../models/types'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  post: FormattedPost
  @Output() postCreated = new EventEmitter()

  ngOnInit(): void {
  }
  enteredTitle: string
  enteredContent: string
  onAddPost(newPostForm: NgForm): void {
    if (newPostForm.invalid){
      return
    }
    this.post = {
      title: newPostForm.value.enteredTitle,
      content: newPostForm.value.enteredContent
    }
    this.postCreated.emit(this.post)
  }

}
