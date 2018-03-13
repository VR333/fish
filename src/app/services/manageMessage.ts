import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages';

@Injectable()
export class ManageMessagesService {
    showActiveMessageButton: boolean = false;
    allMessagesActive: boolean = false;
    currentMessagesCategory;

    messages = MESSAGES;

    // general methods

    getNeededMessages() {
        if (this.currentMessagesCategory === 'starred') {
            return this.messages.filter( msg => msg.starred );
        } else if (this.currentMessagesCategory) {
            return this.messages.filter(
                msg => msg.category === this.currentMessagesCategory
            );
        } else {
            return this.messages;
        }
    }

    checkIfActive() {
        let tempExpression = (this.getNeededMessages().filter( msg => msg.active).length);
        this.showActiveMessageButton = (tempExpression) ? true : false;
        this.allMessagesActive = (tempExpression === this.getNeededMessages().length) ? true : false;
    }

    // Used by Header

    selectMessages(selectOption) {
        debugger;
        let neededMessages = this.getNeededMessages();

        switch (selectOption) {
            case 'Усі':
              this.makeMessagesChangeActiveness(true, neededMessages);
              break;
            case 'Нічого':
              this.makeMessagesChangeActiveness(false, neededMessages);
              break;
            case 'Прочитані':
              this.makeMessagesActiveDueToRead(true, neededMessages);
              break;
            case 'Непрочитані':
              this.makeMessagesActiveDueToRead(false, neededMessages);
              break;
            case 'Із зірочкою':
              this.makeMessagesActiveDueToStarred(true, neededMessages);
              break;
            case 'Без зірочки':
              this.makeMessagesActiveDueToStarred(false, neededMessages);
              break;
        }
    }

    deleteMessage() {
        let duplicate = this.messages.slice(0);

        duplicate.map( msg => {
            if (msg.active) {
                if (msg.category === 'basket') {
                    let indexPoint = this.messages.findIndex( a => a === msg );
                    this.messages.splice(indexPoint, 1);
                } else {
                    msg.category = 'basket';
                    msg.active = false;
                    msg.starred = false;
                }
            }
        });
        this.checkIfActive();
    }

    makeMessagesChangeActiveness( wantActive, neededMessages=this.getNeededMessages() ) {
        neededMessages.map( msg => msg.active = wantActive);
        this.checkIfActive();
    }

    makeMessagesActiveDueToRead(wantRead, neededMessages) {
      neededMessages.map( msg => {
          let condition = (wantRead) ? msg.read : !msg.read;
          msg.active = condition;
        });
        this.checkIfActive();
    }

    makeMessagesActiveDueToStarred(wantStarred, neededMessages) {
      neededMessages.map( msg => {
          let condition = (wantStarred) ? msg.starred : !msg.starred;
          msg.active = condition;
        });
        this.checkIfActive();
    }

    markAllasRead() {
        this.getNeededMessages().map( msg => msg.read = true);
    }

    changeReadState(wantAsRead) {
        this.messages.map( msg => {
            if (msg.active) {
                msg.read = wantAsRead;
            }
        });
    }

    changeImportantState(wantAsImportant) {
        this.messages.map( msg => {
            if (msg.active) {
                msg.important= wantAsImportant;
            }
        });
    }

    changeStarredState(wantAsStarred) {
        this.messages.map( msg => {
            if (msg.active) {
                msg.starred = wantAsStarred;
            }
        });
    }

    // Used by Main

    makeMessageActive(message) {
      message.active = !message.active;
      this.checkIfActive();
    }

    makeMessageChangeStar(message) {
      message.starred = !message.starred;
    }
}
