import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-inbox-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class InboxComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    messages = MESSAGES.filter( message => message.category === 'income');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'income';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'income');
    }
}
