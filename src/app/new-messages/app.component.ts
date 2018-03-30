import { Component } from '@angular/core';
import { NewMessageService } from './../services/NewMessageService';

@Component({
  selector: 'fish-new-messages',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NewMessagesComponent {
    constructor(private NewMessageService: NewMessageService) {}
    newMessages = this.NewMessageService.newMessages;

    deleteTemplate(message) {
        this.NewMessageService.deleteMessageTemplate(message);
    }
}
