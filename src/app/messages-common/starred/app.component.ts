import { Component, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-starred-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class StarredComponent implements DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.starred);

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.starred);
    }
}
