import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CreatingComponent } from '../../pages/creating/creating.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MessageComponent } from '../../pages/message/message.component';

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CreatingComponent,
    MatBadgeModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MessageComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  showModal: boolean = false;

  onMenuClick() {
    this.showModal = true;
  }
  onCloseModal() {
    this.showModal = false; 
  }
  menuItems = [
    {id: 1, icon: 'home', label: 'Kezdőlap', route: '/home' },
    {id: 2, icon: 'search', label: 'Keresés', route: '/home' },
    {id: 3, icon: 'explore', label: 'Felfedezés', route: '/home' },
    {id: 4, icon: 'ondemand_video', label: 'Reels', route: '/home' },
    {id: 5, icon: 'send', label: 'Üzenetek', route: '/message' },
    {id: 6, icon: 'notifications', label: 'Értesítések', route: '/home' },
    {id: 7, icon: 'add_box', label: 'Létrehozás', route: '/creating' },
    {id: 8, icon: 'account_circle', label: 'Profil', route: '/profile' },
  ];
  showMessage: boolean = false;
 
  toggleMessageVisibility() {
    this.showMessage = !this.showMessage;
  }
}
