import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-advertisment-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AdvertismentComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    messages = MESSAGES.filter( message => message.type === 'advertisment');

    ngOnInit() {
        this.msg.currentMessagesType = 'advertisment';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.type === 'advertisment');
    }
}
