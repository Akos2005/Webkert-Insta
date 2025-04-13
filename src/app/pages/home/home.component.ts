import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Pipe({
  name: 'likesFormat',
  standalone: true
})
export class LikesFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1000) {
      return value.toString();
    } else if (value < 1000000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    LikesFormatPipe,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() closeModal = new EventEmitter<void>();
  posts: Posts;
  newPostData = {
    username: '',
    content: '',
    description: '',
    timestamp: new Date().toLocaleDateString('hu-HU'),
    likes: 0
  };

  constructor() {
    this.posts = new Posts();
  }

  submitPost() {
    if (this.newPostData.username && this.newPostData.content) {
      const post = new Post(
        this.newPostData.username,
        this.newPostData.content,
        this.newPostData.description,
        this.newPostData.timestamp,
        this.newPostData.likes
      );
      this.posts.addPost(
        post.username,
        post.content,
        post.description,
        post.timestamp,
        post.likes
      );
      this.resetForm();
      this.closeModal.emit;
    }
  }

  resetForm() {
    this.newPostData = {
      username: '',
      content: '',
      description: '',
      timestamp: new Date().toLocaleDateString('hu-HU'),
      likes: 0
    };
  }
}

export class Post {
  constructor(
    public username: string,
    public content: string,
    public description: string,
    public timestamp: string,
    public likes: number = 0
  ) {}
}

export class Posts {
  list: Post[] = [];

  constructor() {
    this.initializePosts();
  }

  initializePosts(): void {
    this.addPost(
      "Jesmine",
      "https://media.istockphoto.com/id/178893636/hu/fot%C3%B3/a-szeretet-sz%C3%ADvforma.jpg?s=612x612&w=0&k=20&c=jIO3hQ11RHXRUGMin4UhKe0rvaJVB3T8OGzSfKAOAbw=",
      "Likeoljatok!!",
      "2025.03.30",
      1200
    );
    this.addPost(
      "Stephani",
      "https://media.istockphoto.com/id/1143897930/photo/girls-basketball-players-hugging-on-court-after-match.webp?b=1&s=612x612&w=0&k=20&c=GA9r0q2HXSBuz3o_BdQbAGxk_NlKFasC0l9BF2xaxIU=",
      "Újabb nyertes meccs!!",
      "2025.03.30",
      50
    );
  }

  addPost(username: string, content: string, description: string, timestamp: string, likes: number): void {
    const newPost = new Post(username, content, description, timestamp, likes);
    this.list.push(newPost);  
  }
}
