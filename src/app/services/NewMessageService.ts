import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages';

@Injectable()
export class NewMessageService {
	newMessages = [];
	messages = MESSAGES;

	createMessageTemplate() {
		this.newMessages.push({});
	}

	deleteMessageTemplate(message) {
		let index = this.newMessages.indexOf(message);
		this.newMessages.splice(index, 1);
	}

	// rewrite to model
	
	sendMessage(title, topic, content) {
		this.messages.push({
			id: this.messages.length,
			active: false,
			title: title,
			content: content,
			date: this.getCurrentDate(),
			clip: false,
			type: 'sent',
			starred: false,
			read: true,
			important: false,
			category: 'main'
		});
	}

	getCurrentDate() {
		return new Date().toLocaleDateString('ua');
	}
}
