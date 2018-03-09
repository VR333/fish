import { Component } from '@angular/core';

@Component({
  selector: 'fish-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    showExtendedMenu:boolean = false;
    showExtendedCategory:boolean = false;
    showChatCreation:boolean = false;

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
            img: 'fas fa-users'
        },
        {
            text: 'Реклама',
            img: 'fas fa-tags'
        },
        {
            text: 'Оновлення',
            img: 'fas fa-info-circle'
        },
        {
            text: 'Форуми',
            img: 'fas fa-comments'
        }
    ];

    toShowExtendedMenu() {
        this.showExtendedMenu = !this.showExtendedMenu;
    }

    toShowExtendedCategory() {
        this.showExtendedCategory = !this.showExtendedCategory;
    }

    createChat() {
        this.showChatCreation = !this.showChatCreation;
    }
}
