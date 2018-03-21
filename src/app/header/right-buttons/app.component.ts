import { Component } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-header-right-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderRightButtonsComponent {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    isLanguageChoiceActive :boolean = false;
    isSettingsActive :boolean = false;

    showLanguageChoice() {
        this.isLanguageChoiceActive = !this.isLanguageChoiceActive;
    }

    showSettings() {
        this.isSettingsActive = !this.isSettingsActive;
    }
}
