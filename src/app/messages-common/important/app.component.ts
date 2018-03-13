import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-important-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ImportantComponent implements OnInit, DoCheck {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'important');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'important';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'important');
    }
}
