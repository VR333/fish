import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-all-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AllComponent {
    messages = MESSAGES;

    makeMessageActive(message) {
        message.active = !message.active;
    }
}
