import { Component } from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageHeaderBtnsService } from './../services/manageHeaderBtns';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    constructor(
      private msg: ManageMessagesService,
      private ManageHeaderBtnsService: ManageHeaderBtnsService
    ) {}

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
