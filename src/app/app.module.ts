import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/app.component';
import { HeaderComponent } from './header/app.component';
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

import { ManageMessagesService } from './services/manageMessage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ManageMessagesService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
