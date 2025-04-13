import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  isLoading: boolean = false;
  loginError: string = '';
  showLoginForm: boolean = true;

  users: User[] = [];

  constructor() {
    if (!localStorage.getItem('users')) {
      const defaultUsers = [
        new User('test@gmail.com', 'testpw'),
        new User('admin@gmail.com', 'admin123')
      ];
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  login() {
    this.loginError = '';
    const emailValue = this.email.value;
    const passwordValue = this.password.value;

    const foundUser = this.users.find(
      user => user.email === emailValue && user.password === passwordValue
    );

    if (foundUser) {
      this.isLoading = true;
      this.showLoginForm = false;

      localStorage.setItem('isLoggedIn', 'true');

      setTimeout(() => {
        window.location.href = '/home';
      }, 3000);
    } else {
      this.loginError = 'Invalid email or password!';
    }
  }
}
export class User {
  constructor(
    public email: string,
    public password: string
  ) {}
}