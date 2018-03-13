import { Component, OnInit } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-all-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AllComponent implements OnInit {
    constructor(private msg: ManageMessagesService) {}

    messages = MESSAGES;

    ngOnInit() {
        this.msg.currentMessagesCategory = false;
        this.msg.checkIfActive();
    }
}
