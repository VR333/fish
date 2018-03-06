import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages'

@Injectable()
export class ManageMessagesService {
  showActiveMessageButton: boolean = false;

  messages = MESSAGES;

  makeMessageActive(message) {
      message.active = !message.active;

      if (this.messages.filter( message => message.active).length) {
          this.showActiveMessageButton = true;
      } else {
        this.showActiveMessageButton = false;
      }
  }

  makeMessagesInactive() {
    this.showActiveMessageButton = false;
    this.messages.map( msg => msg.active = false);
  }
}
