import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-draft-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class DraftComponent implements OnInit, DoCheck  {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES.filter( message => message.category === 'draft');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'draft';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'draft');
    }
}
