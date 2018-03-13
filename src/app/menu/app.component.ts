import { Component } from '@angular/core';

@Component({
  selector: 'fish-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    resize() {
        let menu = document.getElementById('menu');
        let drag = document.getElementById('drag');
        let options = document.getElementById('msg-opt');
        let freeSpace = menu.offsetHeight - options.offsetHeight - 42;
        drag.style.height = `${freeSpace}px`;
    }
}
