import { Injectable } from '@angular/core';

@Injectable()
export class PaginateMessagesService {
	startMessageIndex :number = 0;
	endMessageNumber: number;
	msgPerPage = 35;

	getEndMessageIndex(filteredMessages) {
		if (filteredMessages.length > this.startMessageIndex + this.msgPerPage) {
			return this.endMessageNumber = this.startMessageIndex + this.msgPerPage;
		} else {
			return this.endMessageNumber = filteredMessages.length;
		}
	}

	nextPage(filteredMessages) {
		if (this.startMessageIndex <= filteredMessages.length) {

			if (this.startMessageIndex + this.msgPerPage >= filteredMessages.length) {
				if (this.endMessageNumber !== filteredMessages.length) {
					this.startMessageIndex = filteredMessages.length;
				}
			} else {
				this.startMessageIndex += this.msgPerPage;
			}
		}
	}

	prevPage() {
		if (this.startMessageIndex - this.msgPerPage <= 0) {
			this.startMessageIndex = 0;
		} else {
			this.startMessageIndex -= this.msgPerPage;
		}
	}

	paginateMessages(filteredMsgByType) {
		return filteredMsgByType.filter( message => {
            let firstCondition = this.startMessageIndex <= filteredMsgByType.indexOf(message);
            let secondCondition = filteredMsgByType.indexOf(message) < this.getEndMessageIndex(filteredMsgByType);
            return firstCondition && secondCondition;
        })
	}

	getOldest(filteredMsgByType) {
        this.endMessageNumber = filteredMsgByType.length;
		if (this.endMessageNumber - this.msgPerPage < 0) {
			this.startMessageIndex = 0;
		} else {
			this.startMessageIndex = this.endMessageNumber - this.msgPerPage;
		}
    }

    getNewest(filteredMsgByType) {
        this.startMessageIndex = 0;
		if (this.startMessageIndex + this.msgPerPage > filteredMsgByType.length) {
			this.endMessageNumber = filteredMsgByType.length;
		} else {
			this.endMessageNumber = this.startMessageIndex + this.msgPerPage;
		}
    }
}
