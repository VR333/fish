import { Injectable } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MESSAGES } from './../messages-common/messages';
import { ManageMessagesService } from './../services/manageMessage';
import { ManageMessagesNumber } from './../services/manageMessagesNumber';

@Injectable()
export class MessageComponentHelper {
	constructor(
		private ManageMessagesService :ManageMessagesService,
		private ManageMessagesNumber :ManageMessagesNumber,
		private location :Location
	){}
	messages = this.ManageMessagesNumber.messages;

	startEditingMessageComponent() {
		if (this.location.path().slice(1) === 'inbox') {
			this.makeMessagesToShow('income');
		} else {
			this.makeMessagesToShow(this.location.path().slice(1));
		}
	}

	makeMessagesToShow(spesificMsg) {
		// filtering stage

		this.messages = this.messages.filter( message => {
			return this.getConditionForSpesificMsg(spesificMsg, message);
		});

		// appropriation stage

		this.ManageMessagesService.currentMessagesType = spesificMsg;
        // this.ManageMessagesNumber.messages = messages;
		this.ManageMessagesService.checkIfActive();
	}

	getConditionForSpesificMsg(spesificMsg, messageToCheck) {
		let condition;
		switch(spesificMsg) {
			case 'all':
				condition = true;
				break;
			case 'important':
				condition = messageToCheck.important;
				break;
			case 'starred':
				condition = messageToCheck.starred;
				break;
			case 'income':
				condition = messageToCheck.type === 'income' && messageToCheck.category === this.ManageMessagesService.currentCategoryActive;
				break;
			default:
				condition = messageToCheck.type === spesificMsg;
				break;
		}
		return condition;
	}
}
