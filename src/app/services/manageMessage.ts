import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages'

@Injectable()
export class ManageMessagesService {
  showActiveMessageButton: boolean = false;

  messages = MESSAGES;

  checkIfActive() {
    if (this.messages.filter( message => message.active).length) {
        this.showActiveMessageButton = true;
    } else {
      this.showActiveMessageButton = false;
    }
  }

  makeMessageActive(message) {
      message.active = !message.active;
      this.checkIfActive();
  }

  selectMessages(selectOption){
      switch (selectOption) {
        case 'All':
          this.makeMessagesInactive();
          this.messages.map( msg => msg.active = true);
          this.checkIfActive();
          break;
        case 'None':
          this.makeMessagesInactive();
          break;
        case 'Read':
          this.makeMessagesInactive();
          this.messages.map( msg => if(msg.read) { msg.active = true; } );
          this.checkIfActive();
          break;
        case 'Unread':
          this.makeMessagesInactive();
          this.messages.map( msg => if(!msg.read) { msg.active = true; } );
          this.checkIfActive();
          break;
        case 'Starred':
          this.makeMessagesInactive();
          this.messages.map( msg => if(msg.starred) { msg.active = true; } );
          this.checkIfActive();
          break;
        case 'Not Starred':
          this.makeMessagesInactive();
          this.messages.map( msg => if(!msg.starred) { msg.active = true; } );
          this.checkIfActive();
          break;
      }
  }

  makeMessagesInactive() {
    this.showActiveMessageButton = false;
    this.messages.map( msg => msg.active = false);
  }
}
