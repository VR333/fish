import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/app.component';

import { HeaderComponent } from './header/app.component';
import { HeaderLeftButtonsComponent } from './header/left-buttons/app.component';
import { HeaderRightButtonsComponent } from './header/right-buttons/app.component';

import { MenuComponent } from './menu/app.component';
import { MenuOptionsComponent } from './menu/menu-options/app.component';
import { MenuUserProfileComponent } from './menu/menu-user-profile/app.component';
import { MainContentComponent } from './main/app.component';
import { MessageComponent } from './messages-common/app.component';
import { MessagesCategoryComponent } from './messages-common/message-category/app.component';
import { NewMessagesComponent } from './new-messages/app.component';

import { ManageMessagesService } from './services/manageMessage';
import { ManageViewService } from './services/manageView';
import { ManageHeaderBtnsService } from './services/manageHeaderBtns';
import { PaginateMessagesService } from './services/PaginateMessagesService';
import { MessageComponentHelper } from './services/messageComponentHelper';
import { NewMessageService } from './services/NewMessageService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLeftButtonsComponent,
    HeaderRightButtonsComponent,
    ForbiddenComponent,
    MenuComponent,
    MenuOptionsComponent,
    MenuUserProfileComponent,
    MainContentComponent,
    MessageComponent,
    MessagesCategoryComponent,
    NewMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      ManageMessagesService,
      ManageViewService,
      ManageHeaderBtnsService,
      PaginateMessagesService,
      MessageComponentHelper,
      NewMessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
