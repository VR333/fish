import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-basket-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ChatsComponent {
    messages = MESSAGES.filter( message => message.category === 'deleted');

    makeMessageActive(message) {
        message.active = !message.active;
    }
}
