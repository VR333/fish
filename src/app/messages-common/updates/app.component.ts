import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-updates-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class UpdatesComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    messages = MESSAGES.filter( message => message.type === 'updates');

    ngOnInit() {
        this.msg.currentMessagesType = 'updates';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.type === 'updates');
    }
}
