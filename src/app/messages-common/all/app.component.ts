import { Component, OnInit } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-all-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AllComponent implements OnInit {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    messages = MESSAGES;

    ngOnInit() {
        this.msg.currentMessagesType = false;
        this.msg.checkIfActive();
    }
}
