import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MessageComponent } from './pages/message/message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MenuComponent,
    MessageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  title = 'fake-insta';}