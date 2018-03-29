import { Component, DoCheck} from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageViewService } from './../services/manageView';
import { PaginateMessagesService } from './../services/PaginateMessagesService';
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
        private PaginateMessagesService: PaginateMessagesService,
        private MessageComponentHelper: MessageComponentHelper
    ) {}

    messages;

    ngDoCheck() {
        // order here matter, first we need to paginate, then - to manageMessagesService
        // in other case you will be managing not paginated array
        // which means managing all messages of a current category and type

        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
        this.PaginateMessagesService.getEndMessageIndex(this.messages);

        this.messages = this.PaginateMessagesService.paginateMessages(this.messages);
        this.ManageMessagesService.getCurrentPageMessages(this.messages);
    }
}
