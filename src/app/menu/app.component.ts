import { Component } from '@angular/core';

@Component({
  selector: 'fish-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
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
            text: 'IMG Соцмережі'
        },
        {
            text: 'IMG Реклама'
        },
        {
            text: 'IMG Оновлення'
        },
        {
            text: 'IMG Форуми'
        }
    ];

    toShowExtendedMenu() {
        this.showExtendedMenu = !this.showExtendedMenu;
    }

    toShowExtendedCategory() {
        this.showExtendedCategory = !this.showExtendedCategory;
    }
}
