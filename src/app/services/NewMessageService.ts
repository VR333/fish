import { Injectable } from '@angular/core';

@Injectable()
export class NewMessageService {
	newMessages = [];

	createMessageTemplate() {
		this.newMessages.push({});
	}

	deleteMessageTemplate(message) {
		let index = this.newMessages.indexOf(message);
		this.newMessages.splice(index, 1);
	}
}
