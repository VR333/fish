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

	messages = MESSAGES;

	startEditingMessageComponent() {
		let filteredMessages;
		if (this.location.path().slice(1) === 'inbox') {
			filteredMessages = this.makeMessagesToShow('income');
		} else {
			filteredMessages = this.makeMessagesToShow(this.location.path().slice(1));
		}
		
		return filteredMessages;
	}

	makeMessagesToShow(spesificMsg) {
		// appropriation stage

		this.ManageMessagesService.currentMessagesType = spesificMsg;

		this.ManageMessagesService.checkIfActive();

		// filtering stage

		return this.messages.filter( message => {
			return this.getConditionForSpesificMsg(spesificMsg, message);
		});
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
