import { Component, DoCheck } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';
import { ManageHeaderBtnsService } from './../../services/manageHeaderBtns';
import { ManageMessagesNumber } from './../../services/manageMessagesNumber';

@Component({
  selector: 'fish-header-right-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class HeaderRightButtonsComponent  implements DoCheck{
    currentFirstMessageNumber :number;
    currentLastMessageNumber :number;

    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService,
        private ManageHeaderBtnsService: ManageHeaderBtnsService,
        private ManageMessagesNumber: ManageMessagesNumber
    ) {}

    ngDoCheck() {
        this.currentFirstMessageNumber = this.ManageMessagesNumber.startMessageIndex + 1;
        this.currentLastMessageNumber = this.ManageMessagesNumber.endMessageNumber;
    }

    showLanguageChoice(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isLanguageChoiceActive = !this.ManageHeaderBtnsService.isLanguageChoiceActive;
    }

    showSettings(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isSettingsActive = !this.ManageHeaderBtnsService.isSettingsActive;
    }
}
