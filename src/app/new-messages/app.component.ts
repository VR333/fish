import { Component } from '@angular/core';
import { NewMessageService } from './../services/NewMessageService';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fish-new-messages',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NewMessagesComponent {
    msgTitle: string;
    msgTopic: string;
    msgContent: string;

    constructor(private NewMessageService: NewMessageService) {}
    newMessages = this.NewMessageService.newMessages;

    deleteTemplate(message) {
        this.NewMessageService.deleteMessageTemplate(message);
    }

    sendNewMessage(newMessage) {
        let warningMessage = "Надіслати це повідомлення без теми і тексту?";
        let isReceiverSet = !!this.msgTitle;
        let isTopicOrContentSet = !!this.msgContent || !!this.msgTopic;

        if (isReceiverSet) {

            if (isTopicOrContentSet || confirm(warningMessage) ) {
                this.NewMessageService.sendMessage(this.msgTitle, this.msgTopic, this.msgContent);
                this.NewMessageService.deleteMessageTemplate(newMessage);
            }

        } else {
            alert("Укажіть хоча б одного адресата..");
        }
    }
}
