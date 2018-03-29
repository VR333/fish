import { Component } from '@angular/core';

@Component({
  selector: 'fish-menu-user-profile',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuUserProfileComponent {
    showChatCreation:boolean = false;

    createChat() {
        this.showChatCreation = !this.showChatCreation;
    }
}
