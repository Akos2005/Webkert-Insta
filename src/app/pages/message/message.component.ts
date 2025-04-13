import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() partnerName: string = 'Valaki';
  @Input() partnerAvatar: string = '';

  messages: { text: string; fromMe: boolean; timestamp: Date }[] = [
    { text: 'Szia!', fromMe: false, timestamp: new Date() },
    { text: 'Hogy vagy?', fromMe: true, timestamp: new Date() }
  ];

  newMessage: string = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      text: this.newMessage,
      fromMe: true,
      timestamp: new Date()
    });

    this.newMessage = '';
  }
}
