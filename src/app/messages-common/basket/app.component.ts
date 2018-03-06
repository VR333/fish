import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-draft-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class BasketComponent {
    messages = MESSAGES.filter( message => message.category === 'basket');

    makeMessageActive(message) {
        message.active = !message.active;
    }
}
