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
            text: 'Income'
        },
        {
            text: 'Starred'
        },
        {
            text: 'Sent'
        },
        {
            text: 'Draft'
        }
    ];

    extendedMenuOptions = [
        {
            text: 'Important'
        },
        {
            text: 'Chats'
        },
        {
            text: 'All'
        },
        {
            text: 'Spam'
        },
        {
            text: 'Basket'
        }
    ];

    extendedCategoryOptions = [
        {
            text: 'IMG Social network'
        },
        {
            text: 'IMG Advertisment'
        },
        {
            text: 'IMG Updates'
        },
        {
            text: 'IMG Forums'
        }
    ];

    toShowExtendedMenu() {
        this.showExtendedMenu = !this.showExtendedMenu;
    }

    toShowExtendedCategory() {
        this.showExtendedCategory = !this.showExtendedCategory;
    }
}
