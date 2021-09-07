import { Component, OnInit, Input } from '@angular/core';
import { FormattedPost } from '../../models/types'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /*posts: {title: string, content: string}[] = [
    {
      title: "First Book",
      content: "This is the first book post"
    },
    {
      title: "Second Book",
      content: "Some other Foo"
    }
  ] */
  @Input() posts: FormattedPost[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
