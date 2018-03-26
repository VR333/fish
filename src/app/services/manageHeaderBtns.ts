import { Injectable } from '@angular/core';

@Injectable()
export class ManageHeaderBtnsService {
	// HeaderComponent

	isTitleActive :boolean = false;

	// HeaderLeftButtonsComponent

	isActoinsActive :boolean = false;
	isMoreActive :boolean = false;
	isReplaceActive :boolean = false;

	//HeaderRightButtonsComponent

	isLanguageChoiceActive :boolean = false;
	isSettingsActive :boolean = false;

	hidePopUps() {
		this.isTitleActive = false;
		this.isActoinsActive = false;
		this.isMoreActive = false;
		this.isReplaceActive = false;
		this.isLanguageChoiceActive = false;
		this.isSettingsActive = false;
	}
}
