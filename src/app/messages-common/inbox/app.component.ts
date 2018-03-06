import { Component } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-inbox-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class InboxComponent {
    messages = MESSAGES.filter( message => message.category === 'income');

    constructor(private msg: ManageMessagesService) {}

    makeMessageActive(message) {
        message.active = !message.active;

        if (MESSAGES.filter( message => message.active).length) {
            this.msg.showActiveMessageButton = true;
        } else {
          this.msg.showActiveMessageButton = false;
        }
    }
}
