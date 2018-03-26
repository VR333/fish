import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { InboxComponent } from './messages-common/inbox/app.component';
// import { SentComponent } from './messages-common/sent/app.component';
// import { StarredComponent } from './messages-common/starred/app.component';
// import { DraftComponent } from './messages-common/draft/app.component';
// import { ChatsComponent } from './messages-common/chats/app.component';
// import { BasketComponent } from './messages-common/basket/app.component';
// import { AllComponent } from './messages-common/all/app.component';
// import { ImportantComponent } from './messages-common/important/app.component';
// import { SpamComponent } from './messages-common/spam/app.component';
//
// import { AdvertismentComponent } from './messages-common/advertisment/app.component';
// import { UpdatesComponent } from './messages-common/updates/app.component';
// import { SocialComponent } from './messages-common/social/app.component';
// import { ForumsComponent } from './messages-common/forums/app.component';

import { MessageComponent } from './messages-common/app.component';

const routes: Routes = [
    { path: '', redirectTo: 'inbox', pathMatch: 'full' },
    { path: 'inbox', component: MessageComponent },
    { path: 'sent', component: MessageComponent },
    { path: 'starred', component: MessageComponent },
    { path: 'draft', component: MessageComponent },
    { path: 'chats', component: MessageComponent },
    { path: 'basket', component: MessageComponent },
    { path: 'all', component: MessageComponent },
    { path: 'important', component: MessageComponent },
    { path: 'spam', component: MessageComponent },
    { path: 'category/advertisment', component: MessageComponent },
    { path: 'category/updates', component: MessageComponent },
    { path: 'category/social', component: MessageComponent },
    { path: 'category/forums', component: MessageComponent },
    { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
