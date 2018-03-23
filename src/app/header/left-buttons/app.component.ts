import { Component } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';

@Component({
  selector: 'fish-header-left-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderLeftButtonsComponent {
    constructor(private msg: ManageMessagesService) {}

    isActoinsActive :boolean = false;
    isMoreActive :boolean = false;
    isReplaceActive :boolean = false;
    selectActiveOptions = [
      'Усі',
      'Нічого',
      'Прочитані',
      'Непрочитані',
      'Із зірочкою',
      'Без зірочки'
    ];

    changeActiveness(event) {
        event.stopPropagation();
        this.msg.makeMessagesChangeActiveness(!this.msg.showActiveMessageButton);
    }

    showActions() {
        this.isActoinsActive = !this.isActoinsActive;
    }

    reloadPage() {
      location.reload();
    }

    showMore() {
        this.isMoreActive = !this.isMoreActive;
    }

    makeReplaceBtnActive() {
        this.isReplaceActive = !this.isReplaceActive;
    }

    changeCategory(category) {
        this.msg.changeMessageCategory(category);
        this.isReplaceActive = false;
    }

    changeType(newType) {
        this.msg.changeMessageType(newType);
    }

    deleteMsg () {
        this.msg.deleteMessage()
    }
}
