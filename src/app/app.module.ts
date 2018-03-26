import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/app.component';

import { HeaderComponent } from './header/app.component';
import { HeaderLeftButtonsComponent } from './header/left-buttons/app.component';
import { HeaderRightButtonsComponent } from './header/right-buttons/app.component';

import { MenuComponent } from './menu/app.component';
import { MenuOptionsComponent } from './menu/menu-options/app.component';
import { UserProfileComponent } from './menu/user-profile/app.component';
import { MainContentComponent } from './main/app.component';
import { MessageComponent } from './messages-common/app.component';
import { MessagesCategoryComponent } from './messages-common/message-category/app.component';

import { ManageMessagesService } from './services/manageMessage';
import { ManageViewService } from './services/manageView';
import { ManageHeaderBtnsService } from './services/manageHeaderBtns';
import { ManageMessagesNumber } from './services/manageMessagesNumber';
import { MessageComponentHelper } from './services/messageComponentHelper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLeftButtonsComponent,
    HeaderRightButtonsComponent,
    ForbiddenComponent,
    MenuComponent,
    MainContentComponent,
    MessageComponent,
    MenuOptionsComponent,
    UserProfileComponent,
    MessagesCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      ManageMessagesService,
      ManageViewService,
      ManageHeaderBtnsService,
      ManageMessagesNumber,
      MessageComponentHelper
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
