import { Component } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';
import { ManageHeaderBtnsService } from './../../services/manageHeaderBtns';

@Component({
  selector: 'fish-header-right-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class HeaderRightButtonsComponent {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService,
        private ManageHeaderBtnsService: ManageHeaderBtnsService
    ) {}

    showLanguageChoice(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isLanguageChoiceActive = !this.ManageHeaderBtnsService.isLanguageChoiceActive;
    }

    showSettings(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isSettingsActive = !this.ManageHeaderBtnsService.isSettingsActive;
    }
}
