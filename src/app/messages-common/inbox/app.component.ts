import { Component, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-inbox-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class InboxComponent implements DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'income');

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'income');
    }
}
