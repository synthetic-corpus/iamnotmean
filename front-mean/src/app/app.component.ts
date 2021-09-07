import { Component } from '@angular/core';
import { FormattedPost } from './models/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPosts: FormattedPost[] = []

  onPostAdded(post: FormattedPost){
    this.allPosts.push(post)
  }
}
