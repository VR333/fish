import { Component } from '@angular/core';
import { ManageViewService } from './../../services/manageView';
import { NewMessageService } from './../../services/NewMessageService';
// import { messages/Router } from '@angular/router';

@Component({
  selector: 'fish-menu-options',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuOptionsComponent {
    constructor(
        private view: ManageViewService,
        private NewMessageService: NewMessageService
         // private router: Router
    ) {}

    showExtendedMenu:boolean = false;
    showExtendedCategory:boolean = false;

    coreMenuOptions = [
        {
            text: 'Вхідні',
            link: 'messages/inbox'
        },
        {
            text: 'Із зірочкою',
            link: 'messages/starred'
        },
        {
            text: 'Надіслані',
            link: 'messages/sent'
        },
        {
            text: 'Чернетки',
            link: 'messages/draft'
        }
    ];

    extendedMenuOptions = [
        {
            text: 'Важливі',
            link: 'messages/important'
        },
        {
            text: 'Чати',
            link: 'messages/chats'
        },
        {
            text: 'Уся пошта',
            link: 'messages/all'
        },
        {
            text: 'Спам',
            link: 'messages/spam'
        },
        {
            text: 'Кошик',
            link: 'messages/basket'
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

    // navigateTo(link) {
    //     this.router.navigate(['messages', link]);
    // }

    toShowExtendedMenu() {
        this.showExtendedMenu = !this.showExtendedMenu;
    }

    toShowExtendedCategory() {
        this.showExtendedCategory = !this.showExtendedCategory;
    }

    makeNewMesageTemplate() {
        this.NewMessageService.createMessageTemplate();
    }
}
