import { Injectable } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MESSAGES } from './../messages-common/messages';
import { ManageMessagesService } from './../services/manageMessage';
import { PaginateMessagesService } from './../services/PaginateMessagesService';

@Injectable()
export class MessageComponentHelper {
	constructor(
		private ManageMessagesService :ManageMessagesService,
		private PaginateMessagesService :PaginateMessagesService,
		private location :Location
    ) {}

	messages = MESSAGES;

	startEditingMessageComponent(type) {
		let filteredMessages;
		if (type === 'inbox') {
			filteredMessages = this.makeMessagesToShow('income');
		} else {
			filteredMessages = this.makeMessagesToShow(type);
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
