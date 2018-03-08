import { Component } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-all-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AllComponent {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES;
}
