import { Injectable } from '@angular/core';
import { MESSAGES } from './../messages-common/messages'

@Injectable()
export class ManageMessagesService {
  showActiveMessageButton: boolean = false;

  messages = MESSAGES;
}
