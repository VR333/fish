import { Component } from '@angular/core';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    isTitleActive :boolean = false;
    isActoinsActive :boolean = false;
    isMoreActive :boolean = false;
    isLanguageChoiceActive :boolean = false;
    isSettingsActive :boolean = false;

    showTitles() {
        this.isTitleActive = !this.isTitleActive;
    }

    showActions() {
        this.isActoinsActive = !this.isActoinsActive;
    }

    showMore() {
        this.isMoreActive = !this.isMoreActive;
    }

    showLanguageChoice() {
        this.isLanguageChoiceActive = !this.isLanguageChoiceActive;
    }

    showSettings() {
        this.isSettingsActive = !this.isSettingsActive;
    }
}
