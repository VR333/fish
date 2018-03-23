import { Component } from '@angular/core';
import { ManageMessagesService } from './../services/manageMessage';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    constructor(private msg: ManageMessagesService) {}

    isTitleActive :boolean = false;

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
        this.isTitleActive = !this.isTitleActive;
    }

    hideTitles() {
        this.isTitleActive = false;
    }
}
