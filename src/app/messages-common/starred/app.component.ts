import { Component } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-starred-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class StarredComponent {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.starred);
}
