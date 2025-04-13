import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Post } from '../home/home.component';

@Component({
  selector: 'app-creating',
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule],
  templateUrl: './creating.component.html',
  styleUrl: './creating.component.scss'
})
export class CreatingComponent {
  @Output() newPost = new EventEmitter<Post>();
  @Output() closeModal = new EventEmitter<void>();
  postData = {
    username: '',
    content: '',
    description: '',
    timestamp: new Date().toLocaleDateString('hu-HU'),
    likes: 0
  };

  submitPost() {
    if (this.postData.username && this.postData.content) {
      const post = new Post(
        this.postData.username,
        this.postData.content,
        this.postData.description,
        this.postData.timestamp,
        this.postData.likes
      );
      this.newPost.emit(post);
      this.resetForm();
      this.closeModal.emit;
    }
  }

  resetForm() {
    this.postData = {
      username: '',
      content: '',
      description: '',
      timestamp: new Date().toLocaleDateString('hu-HU'),
      likes: 0
    };
  }
}
