import { Component, DoCheck } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';
import { ManageHeaderBtnsService } from './../../services/manageHeaderBtns';
import { ManageMessagesNumber } from './../../services/manageMessagesNumber';
import { MessageComponentHelper } from './../../services/messageComponentHelper';

@Component({
  selector: 'fish-header-right-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class HeaderRightButtonsComponent  implements DoCheck{
    currentFirstMessageNumber :number;
    currentLastMessageNumber :number;
    currentAllMessagesNumber :number;
    messages = this.MessageComponentHelper.messages;

    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService,
        private ManageHeaderBtnsService: ManageHeaderBtnsService,
        private ManageMessagesNumber: ManageMessagesNumber,
        private MessageComponentHelper: MessageComponentHelper
    ) {}

    ngDoCheck() {
        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
        this.ManageMessagesNumber.getEndMessageIndex(this.messages);

        this.currentFirstMessageNumber = this.ManageMessagesNumber.startMessageIndex + 1;
        this.currentLastMessageNumber = this.ManageMessagesNumber.endMessageNumber;
        this.currentAllMessagesNumber = this.messages.length;
        this.checkForPaginationMenuNeed();
    }

    showLanguageChoice(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isLanguageChoiceActive = !this.ManageHeaderBtnsService.isLanguageChoiceActive;
    }

    showSettings(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isSettingsActive = !this.ManageHeaderBtnsService.isSettingsActive;
    }

    previousPage() {
        this.ManageMessagesNumber.prevPage();
    }

    nextPage() {
        this.ManageMessagesNumber.nextPage(this.messages);
    }

    checkForPaginationMenuNeed () {
        if (this.MessageComponentHelper.startEditingMessageComponent().length === 0) {
            this.ManageHeaderBtnsService.showPaginationMenu = false;
        } else {
            this.ManageHeaderBtnsService.showPaginationMenu = true;
        }
    }
}
