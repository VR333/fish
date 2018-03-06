import { Component } from '@angular/core';
import { MESSAGES } from './../messages'

@Component({
  selector: 'fish-sent-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class SentComponent {
    messages = MESSAGES.filter( message => message.category === 'sent');
}
