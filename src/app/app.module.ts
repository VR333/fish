import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/app.component';
import { HeaderComponent } from './header/app.component';
import { MenuComponent } from './menu/app.component';
import { MainContentComponent } from './main/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForbiddenComponent,
    MenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
