import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-draft-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class BasketComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    messages = MESSAGES.filter( message => message.type === 'basket');

    ngOnInit() {
        this.msg.currentMessagesType = 'basket';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.type === 'basket');
    }
}
