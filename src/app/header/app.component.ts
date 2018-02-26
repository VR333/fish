import { Component } from '@angular/core';

@Component({
  selector: 'fish-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderComponent {
    isActive :boolean = false;

    makeActive() {
        this.isActive = !this.isActive;
    }
}
