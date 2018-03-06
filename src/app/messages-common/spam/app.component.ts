import { Component } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-spam-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class SpamComponent {
    constructor(private msg: ManageMessagesService) {}
    
    messages = MESSAGES.filter( message => message.category === 'spam');
}
