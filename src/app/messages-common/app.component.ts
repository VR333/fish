import { Component, DoCheck} from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageViewService } from './../services/manageView';
import { ManageMessagesNumber } from './../services/manageMessagesNumber';
import { MessageComponentHelper } from './../services/messageComponentHelper';

@Component({
  selector: 'fish-messages',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MessageComponent implements DoCheck {
    constructor(
        private ManageMessagesService: ManageMessagesService,
        private view: ManageViewService,
        private ManageMessagesNumber: ManageMessagesNumber,
        private MessageComponentHelper: MessageComponentHelper
    ) {}

    messages;

    ngDoCheck() {
        // order here matter, first we need to paginate, then - to manageMessagesService

        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
        this.ManageMessagesNumber.getEndMessageIndex(this.messages);

        this.messages = this.ManageMessagesNumber.paginateMessages(this.messages);
        this.ManageMessagesService.getCurrentPageMessages(this.messages);
    }
}
