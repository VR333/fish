import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-important-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ImportantComponent {
    messages = MESSAGES.filter( message => message.important);

    makeMessageActive(message) {
        message.active = !message.active;
    }
}
