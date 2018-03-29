import { Component, DoCheck } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';
import { ManageHeaderBtnsService } from './../../services/manageHeaderBtns';
import { PaginateMessagesService } from './../../services/PaginateMessagesService';
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
        private PaginateMessagesService: PaginateMessagesService,
        private MessageComponentHelper: MessageComponentHelper
    ) {}

    ngDoCheck() {
        this.messages = this.MessageComponentHelper.startEditingMessageComponent();
        this.PaginateMessagesService.getEndMessageIndex(this.messages);

        this.currentFirstMessageNumber = this.PaginateMessagesService.startMessageIndex + 1;
        this.currentLastMessageNumber = this.PaginateMessagesService.endMessageNumber;
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
        this.PaginateMessagesService.prevPage();
    }

    nextPage() {
        this.PaginateMessagesService.nextPage(this.messages);
    }

    checkForPaginationMenuNeed () {
        if (this.MessageComponentHelper.startEditingMessageComponent().length === 0) {
            this.ManageHeaderBtnsService.showPaginationMenu = false;
        } else {
            this.ManageHeaderBtnsService.showPaginationMenu = true;
        }
    }

    getOldest() {
        this.PaginateMessagesService.getOldest(this.messages);
    }

    getNewest() {
        this.PaginateMessagesService.getNewest(this.messages);
    }

    isNewest() {
        return (this.currentFirstMessageNumber === 1) ? true : false;
    }

    isOldest() {
        return (this.currentLastMessageNumber === this.messages.length) ? true : false;
    }
}
