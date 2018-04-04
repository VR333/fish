import { Component, ViewChild } from '@angular/core';
import { NewMessageService } from './../services/NewMessageService';

@Component({
  selector: 'fish-new-messages',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NewMessagesComponent {
    @ViewChild('msgTitle') msgTitle;
    @ViewChild('msgTopic') msgTopic;
    @ViewChild('msgContent') msgContent;

    constructor(private NewMessageService: NewMessageService) {}
    newMessages = this.NewMessageService.newMessages;

    deleteTemplate(message) {
        this.NewMessageService.deleteMessageTemplate(message);
    }

    sendNewMessage(newMessage) {
        let title = this.msgTitle.nativeElement.value;
        let content = this.msgContent.nativeElement.value;
        let topic = this.msgTopic.nativeElement.value;

        let warningMessage = "Надіслати це повідомлення без теми і тексту?";
        let isReceiverSet = !!title;
        let isTopicOrContentSet = !!content || !!topic;

        if (isReceiverSet) {

            if (isTopicOrContentSet || confirm(warningMessage) ) {
                this.NewMessageService.sendMessage(title, topic, content);
                this.NewMessageService.deleteMessageTemplate(newMessage);
            }

        } else {
            alert("Укажіть хоча б одного адресата..");
        }
    }
}
