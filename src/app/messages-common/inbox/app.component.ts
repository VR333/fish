import { Component, OnInit, DoCheck } from '@angular/core';
import { MESSAGES } from './../messages';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-inbox-messages',
  templateUrl: './../app.component.html',
  styleUrls: ['./../app.component.scss']
})
export class InboxComponent implements OnInit, DoCheck {
    constructor(private msg: ManageMessagesService) {}
    categoryButtonActive: number = 0;
    categoryButtons = [
        {
            id: 0,
            class: 'category-common category grey jump-fix',
            color: 'active-grey',
            icon: 'fas fa-inbox',
            text: 'Основні'
        },
        {
            id: 1,
            class: 'category-common category blue jump-fix',
            color: 'active-blue',
            icon: 'fas fa-users',
            text: 'Соцмережі'
        },
        {
            id: 2,
            class: 'category-common category green jump-fix',
            color: 'active-green',
            icon: 'fas fa-tags',
            text: 'Реклама'
        }
    ];

    messages = MESSAGES.filter( message => message.category === 'income');

    ngOnInit() {
        this.msg.currentMessagesCategory = 'income';
        this.msg.checkIfActive();
    }

    ngDoCheck() {
        this.messages = MESSAGES.filter( message => message.category === 'income');
    }

    makeCategoryActive(categoryId) {
        this.categoryButtonActive = categoryId;
    }
}
