import { Component, OnInit } from '@angular/core';
import { FormattedPost } from '../../models/types'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  post: FormattedPost

  ngOnInit(): void {
  }
  enteredTitle: string
  enteredContent: string
  onAddPost(): void {
    this.post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
  }

}
