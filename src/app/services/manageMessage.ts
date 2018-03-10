import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages'

@Injectable()
export class ManageMessagesService {
    showActiveMessageButton: boolean = false;
    allMessagesActive: boolean = false;

    messages = MESSAGES;

    checkIfActive() {
        let tempExpression = (this.messages.filter( message => message.active).length);
        this.showActiveMessageButton = (tempExpression) ? true : false;
        this.allMessagesActive = (tempExpression === this.messages.length) ? true : false;
    }

    makeMessageActive(message) {
      message.active = !message.active;
      this.checkIfActive();
    }

    makeMessageChangeStar(message) {
      message.starred = !message.starred;
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
                }
            }
        });
        this.checkIfActive();
    }

    selectMessages(selectOption){
      switch (selectOption) {
        case 'Усі':
          this.makeMessagesInactive();
          this.messages.map( msg => msg.active = true);
          this.checkIfActive();
          break;
        case 'Нічого':
          this.makeMessagesInactive();
          break;
        case 'Прочитані':
          this.makeMessagesInactive();
          this.messages.map( msg => {
              if(msg.read) {
                  msg.active = true;
               }
            });
          this.checkIfActive();
          break;
        case 'Непрочитані':
          this.makeMessagesInactive();
          this.messages.map( msg => {
              if(!msg.read) {
                  msg.active = true;
              }
          });
          this.checkIfActive();
          break;
        case 'Із зірочкою':
          this.makeMessagesInactive();
          this.messages.map( msg => {
              if(msg.starred) {
                  msg.active = true;
              }
          });
          this.checkIfActive();
          break;
        case 'Без зірочки':
          this.makeMessagesInactive();
          this.messages.map( msg => {
              if(!msg.starred) {
                  msg.active = true;
              }
          });
          this.checkIfActive();
          break;
      }
    }

    makeMessagesInactive() {
        this.showActiveMessageButton = false;
        this.messages.map( msg => msg.active = false);
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
}
