import { Component } from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageViewService } from './../services/manageView';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    isTitleActive :boolean = false;
    isActoinsActive :boolean = false;
    isMoreActive :boolean = false;
    isLanguageChoiceActive :boolean = false;
    isSettingsActive :boolean = false;
    isReplaceActive :boolean = false;
    selectActiveOptions = [
      'Усі',
      'Нічого',
      'Прочитані',
      'Непрочитані',
      'Із зірочкою',
      'Без зірочки'
    ];

    tooltipTitleOptions = [
        {
            text: 'Fmail',
            class: 'fmail-title-option option-logo',
            link: '#'
        },
        {
            text: 'Контакти',
            class: 'fmail-title-option',
            link: '#'
        },
        {
            text: 'Завдання',
            class: 'fmail-title-option',
            link: '#'
        }
    ];

    changeActiveness(event) {
        event.stopPropagation();
        this.msg.makeMessagesChangeActiveness(!this.msg.showActiveMessageButton);
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

    makeReplaceBtnActive() {
        this.isReplaceActive = !this.isReplaceActive;
    }

    changeCategory(category) {
        this.msg.changeMessageCategory(category);
        this.isReplaceActive = false;
    }

    changeType(newType) {
        this.msg.changeMessageType(newType);
    }

    deleteMsg () {
        this.msg.deleteMessage()
    }
}
