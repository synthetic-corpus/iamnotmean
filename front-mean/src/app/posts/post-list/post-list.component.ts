import { Component, OnInit } from '@angular/core';

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
  posts: {title: string, content: string}[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
