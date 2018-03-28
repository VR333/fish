import { Component, OnInit, DoCheck} from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageViewService } from './../services/manageView';
import { ManageMessagesNumber } from './../services/manageMessagesNumber';
import { MessageComponentHelper } from './../services/messageComponentHelper';

@Component({
  selector: 'fish-messages',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MessageComponent implements OnInit, DoCheck {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService,
        private ManageMessagesNumber: ManageMessagesNumber,
        private MessageComponentHelper: MessageComponentHelper
    ) {}
    messages = this.MessageComponentHelper.messages;


    ngOnInit () {
        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
    }

    ngDoCheck() {
        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
        this.ManageMessagesNumber.getEndMessageIndex(this.messages);

        this.messages = this.messages.filter( message => {
            let firstCondition = this.ManageMessagesNumber.startMessageIndex <= this.messages.indexOf(message);
            let secondCondition = this.messages.indexOf(message) < this.ManageMessagesNumber.getEndMessageIndex(this.messages);
            return firstCondition && secondCondition;
        });
    }
}
