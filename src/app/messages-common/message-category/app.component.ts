import { Component } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageViewService } from './../../services/manageView';

@Component({
  selector: 'fish-messages-category',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MessagesCategoryComponent {
    constructor(
        private msg: ManageMessagesService,
        private view: ManageViewService
    ) {}

    categoryButtonActive: number = 0;
    categoryButtons = [
        {
            id: 0,
            class: 'category-common category grey jump-fix',
            icon: 'fas fa-inbox',
            text: 'Основні',
            category: 'main'
        },
        {
            id: 1,
            class: 'category-common category blue jump-fix',
            icon: 'fas fa-users',
            text: 'Соцмережі',
            category: 'social'
        },
        {
            id: 2,
            class: 'category-common category green jump-fix',
            icon: 'fas fa-tags',
            text: 'Реклама',
            category: 'advertisment'
        }
    ];

    makeCategoryActive(categoryId, category) {
        this.categoryButtonActive = categoryId;
        this.msg.currentCategoryActive = category;
    }
}
