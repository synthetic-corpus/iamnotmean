import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newPost: string = "no content here"
  enteredValue: string
  onAddPost(): void {
    this.newPost = this.enteredValue
  }

}
