import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-updates-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class UpdatesComponent implements OnInit, DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'updates');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'updates';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'updates');
    }
}
