import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-basket-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ChatsComponent implements OnInit, DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'chat');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'chat';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'chat');
    }
}
