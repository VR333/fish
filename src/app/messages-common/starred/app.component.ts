import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-starred-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class StarredComponent {
    messages = MESSAGES.filter( message => message.starred);

    makeMessageActive(message) {
        message.active = !message.active;
    }
}
