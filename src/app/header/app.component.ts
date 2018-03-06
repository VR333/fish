import { Component } from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    isTitleActive :boolean = false;
    isActoinsActive :boolean = false;
    isMoreActive :boolean = false;
    isLanguageChoiceActive :boolean = false;
    isSettingsActive :boolean = false;
    selectActiveOptions = [
      'All',
      'None',
      'Read',
      'Unread',
      'Starred',
      'Not Starred'
    ];

    constructor(private msg: ManageMessagesService) {}

    makeInactive(event) {
        event.stopPropagation();
        this.msg.makeMessagesInactive();
    }

    showTitles() {
        this.isTitleActive = !this.isTitleActive;
    }

    showActions() {
        this.isActoinsActive = !this.isActoinsActive;
    }

    showMore() {
        this.isMoreActive = !this.isMoreActive;
    }

    showLanguageChoice() {
        this.isLanguageChoiceActive = !this.isLanguageChoiceActive;
    }

    showSettings() {
        this.isSettingsActive = !this.isSettingsActive;
    }
}
