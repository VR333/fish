import { Component, DoCheck } from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageHeaderBtnsService } from './../services/manageHeaderBtns';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent implements DoCheck {
    constructor(
      private ManageMessagesService: ManageMessagesService,
      private ManageHeaderBtnsService: ManageHeaderBtnsService
    ) {}
    isBig :boolean;

    ngDoCheck() {
        this.isBig = this.ManageMessagesService.showActiveMessageButton;
    }

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

    showTitles(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isTitleActive = !this.ManageHeaderBtnsService.isTitleActive;
    }
}
