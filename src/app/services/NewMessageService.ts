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

// {
// 	id: 0,
// 	active: false,
// 	title: 'Fish Site',
// 	content: 'Hi, my name is Rostyslavfgdfghdfghdfgfghdfghfghdfghhdfghdgfhgfhdfghdfgh',
// 	date: '07.03.18',
// 	clip: true,
// 	type: 'income',
// 	starred: true,
// 	read: true,
// 	important: false,
// 	category: 'main'
// },
