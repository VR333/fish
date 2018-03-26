import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';
import { ManageMessagesNumber } from './../../services/manageMessagesNumber';

@Component({
  selector: 'fish-inbox-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class InboxComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService,
        private ManageMessagesNumber: ManageMessagesNumber
    ) {}

    messages = MESSAGES.filter( message => message.type === 'income');

    ngOnInit() {
        this.msg.currentMessagesType = 'income';
        this.ManageMessagesNumber.messages = this.messages;

        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.ManageMessagesNumber.getEndMessageIndex();
        this.messages = MESSAGES.filter( message => message.type === 'income' && message.category === this.msg.currentCategoryActive);

        this.messages = this.messages.filter( message => {
            let firstCondition = this.ManageMessagesNumber.startMessageIndex < this.messages.indexOf(message);
            let secondCondition = this.messages.indexOf(message) <= this.ManageMessagesNumber.getEndMessageIndex();
            return firstCondition && secondCondition;
        });
    }
}
