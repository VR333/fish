import { Injectable } from '@angular/core';

@Injectable()
export class NewMessageService {
	newMessages = [];

	createMessageTemplate() {
		this.newMessages.push({});
	}

	deleteMessageTemplate() {
		this.newMessages.pop();
	}
}
