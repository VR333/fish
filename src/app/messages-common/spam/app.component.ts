import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-spam-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class SpamComponent {
    messages = MESSAGES.filter( message => message.spam);

    makeMessageActive(message) {
        message.active = !message.active;
    }
}