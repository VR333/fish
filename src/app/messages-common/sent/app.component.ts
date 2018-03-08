import { Component, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-sent-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class SentComponent implements DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'sent');
    
    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'sent');
    }
}
