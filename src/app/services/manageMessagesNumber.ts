import { Injectable } from '@angular/core';

@Injectable()
export class ManageMessagesNumber {
	startMessageIndex :number = 0;
	endMessageNumber: number;
	msgPerPage = 35;
	messages;

	getEndMessageIndex() {
		if (this.messages.length > this.startMessageIndex + this.msgPerPage) {
			return this.endMessageNumber = this.startMessageIndex + this.msgPerPage;
		} else {
			return this.endMessageNumber = this.messages.length;
		}
	}

	nextPage() {
		if (this.endMessageNumber < this.messages.length) {
			this.startMessageIndex += 35;
		}
	}

	prevPage() {
		if (this.startMessageIndex > 0) {
			this.startMessageIndex -= 35;
		}
	}
}
