import { HostListener, Component } from '@angular/core';
import { ManageHeaderBtnsService } from './services/manageHeaderBtns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ManageHeaderBtnsService: ManageHeaderBtnsService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClicked(ev) {
      this.ManageHeaderBtnsService.hidePopUps();
  }
}
