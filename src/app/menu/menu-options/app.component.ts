import { Component } from '@angular/core';

@Component({
  selector: 'fish-menu-options',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuOptionsComponent {
    showExtendedMenu:boolean = false;
    showExtendedCategory:boolean = false;

    coreMenuOptions = [
        {
            text: 'Вхідні',
            link: 'inbox'
        },
        {
            text: 'Із зірочкою',
            link: 'starred'
        },
        {
            text: 'Надіслані',
            link: 'sent'
        },
        {
            text: 'Чернетки',
            link: 'draft'
        }
    ];

    extendedMenuOptions = [
        {
            text: 'Важливі',
            link: 'important'
        },
        {
            text: 'Чати',
            link: 'chats'
        },
        {
            text: 'Уся пошта',
            link: 'all'
        },
        {
            text: 'Спам',
            link: 'spam'
        },
        {
            text: 'Кошик',
            link: 'basket'
        }
    ];

    extendedCategoryOptions = [
        {
            text: 'Соцмережі',
            img: 'fas fa-users',
            class: 'category-style-arrow blue-style-arrow',
            link: 'category/social'
        },
        {
            text: 'Реклама',
            img: 'fas fa-tags',
            class: 'category-style-arrow green-style-arrow',
            link: 'category/advertisment'
        },
        {
            text: 'Оновлення',
            img: 'fas fa-info-circle',
            class: 'category-style-arrow yellow-style-arrow',
            link: 'category/updates'
        },
        {
            text: 'Форуми',
            img: 'fas fa-comments',
            class: 'category-style-arrow purple-style-arrow',
            link: 'category/forums'
        }
    ];

    toShowExtendedMenu() {
        this.showExtendedMenu = !this.showExtendedMenu;
    }

    toShowExtendedCategory() {
        this.showExtendedCategory = !this.showExtendedCategory;
    }
}
