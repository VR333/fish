import { Component } from '@angular/core';
import { ManageMessagesService } from './../../services/manageMessage';
import { ManageHeaderBtnsService } from './../../services/manageHeaderBtns';

@Component({
  selector: 'fish-header-left-buttons',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class HeaderLeftButtonsComponent {
    constructor(
      private msg: ManageMessagesService,
      private ManageHeaderBtnsService: ManageHeaderBtnsService
    ) {}

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

    showActions(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isActoinsActive = !this.ManageHeaderBtnsService.isActoinsActive;
    }

    reloadPage() {
      location.reload();
    }

    showMore(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isMoreActive = !this.ManageHeaderBtnsService.isMoreActive;
    }

    makeReplaceBtnActive(event) {
        event.stopPropagation();
        this.ManageHeaderBtnsService.isReplaceActive = !this.ManageHeaderBtnsService.isReplaceActive;
    }

    changeCategory(category) {
        this.msg.changeMessageCategory(category);
    }

    changeType(newType) {
        this.msg.changeMessageType(newType);
    }

    deleteMsg () {
        this.msg.deleteMessage()
    }
}
