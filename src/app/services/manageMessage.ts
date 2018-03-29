import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages';

@Injectable()
export class ManageMessagesService {
    showActiveMessageButton: boolean = false;
    allMessagesActive: boolean = false;
    currentMessagesType;
    currentCategoryActive = 'main';
    messages = MESSAGES;

    // initialize method to get messages from a current pagination page
    // note that messages will become filtered version of original array,
    // after this method invoke
    // if you want to modyfy original messages array, use MESSAGES directly instead

    getCurrentPageMessages(currentPageMessages) {
        this.messages = currentPageMessages;
    }
    // general methods

    checkIfActive() {
        let tempExpression = (this.messages.filter( msg => msg.active).length);
        this.showActiveMessageButton = (tempExpression) ? true : false;
        this.allMessagesActive = (tempExpression === this.messages.length) ? true : false;
    }

    // Used by HeaderComponent

    selectMessages(selectOption) {
        switch (selectOption) {
            case 'Усі':
              this.makeMessagesChangeActiveness(true, this.messages);
              break;
            case 'Нічого':
              this.makeMessagesChangeActiveness(false, this.messages);
              break;
            case 'Прочитані':
              this.makeMessagesActiveDueToRead(true, this.messages);
              break;
            case 'Непрочитані':
              this.makeMessagesActiveDueToRead(false, this.messages);
              break;
            case 'Із зірочкою':
              this.makeMessagesActiveDueToStarred(true, this.messages);
              break;
            case 'Без зірочки':
              this.makeMessagesActiveDueToStarred(false, this.messages);
              break;
        }
    }

    deleteMessage() {
        let duplicate = this.messages.slice(0);

        duplicate.map( msg => {
            if (msg.active) {
                if (msg.type === 'basket') {
                    let indexPoint = MESSAGES.findIndex( a => a === msg );
                    MESSAGES.splice(indexPoint, 1);
                } else {
                    msg.type = 'basket';
                    msg.active = false;
                    msg.starred = false;
                }
            }
        });
        this.checkIfActive();
    }

    makeMessagesChangeActiveness( wantActive, neededMessages=this.messages ) {
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
        this.messages.map( msg => msg.read = true);
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

    changeMessageCategory(newCategory) {
        this.messages.map( msg => {
            if (msg.active) {
                msg.category = newCategory;
                msg.active = false;
            }

            this.checkIfActive();
        });
    }

    changeMessageType(newType) {
        this.messages.map( msg => {
            if (msg.active) {
                msg.type = newType;
                msg.active = false;
            }

            this.checkIfActive();
        });
    }

    // Used by MainComponent

    makeMessageActive(message) {
      message.active = !message.active;
      this.checkIfActive();
    }

    makeMessageChangeStar(message) {
      message.starred = !message.starred;
    }
}
