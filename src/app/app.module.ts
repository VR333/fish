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
import { InboxComponent } from './messages-common/inbox/app.component';
import { SentComponent } from './messages-common/sent/app.component';
import { StarredComponent } from './messages-common/starred/app.component';
import { DraftComponent } from './messages-common/draft/app.component';
import { ChatsComponent } from './messages-common/chats/app.component';
import { BasketComponent } from './messages-common/basket/app.component';
import { AllComponent } from './messages-common/all/app.component';
import { ImportantComponent } from './messages-common/important/app.component';
import { SpamComponent } from './messages-common/spam/app.component';
import { MessagesCategoryComponent } from './messages-common/message-category/app.component';


import { AdvertismentComponent } from './messages-common/advertisment/app.component';
import { UpdatesComponent } from './messages-common/updates/app.component';
import { SocialComponent } from './messages-common/social/app.component';
import { ForumsComponent } from './messages-common/forums/app.component';

import { ManageMessagesService } from './services/manageMessage';
import { ManageViewService } from './services/manageView';
import { ManageHeaderBtnsService } from './services/manageHeaderBtns';
import { ManageMessagesNumber } from './services/manageMessagesNumber';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLeftButtonsComponent,
    HeaderRightButtonsComponent,
    ForbiddenComponent,
    MenuComponent,
    MainContentComponent,
    InboxComponent,
    SentComponent,
    StarredComponent,
    DraftComponent,
    ChatsComponent,
    BasketComponent,
    AllComponent,
    ImportantComponent,
    SpamComponent,
    MenuOptionsComponent,
    UserProfileComponent,
    AdvertismentComponent,
    UpdatesComponent,
    SocialComponent,
    ForumsComponent,
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
      ManageMessagesNumber
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
