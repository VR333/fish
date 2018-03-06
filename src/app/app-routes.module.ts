import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent } from './messages-common/inbox/app.component';
import { SentComponent } from './messages-common/sent/app.component';
import { StarredComponent } from './messages-common/starred/app.component';
import { DraftComponent } from './messages-common/draft/app.component';
import { ChatsComponent } from './messages-common/chats/app.component';
import { BasketComponent } from './messages-common/basket/app.component';
import { AllComponent } from './messages-common/all/app.component';
import { ImportantComponent } from './messages-common/important/app.component';
import { SpamComponent } from './messages-common/spam/app.component';

const routes: Routes = [
    { path: '', redirectTo: 'inbox', pathMatch: 'full' },
    { path: 'inbox', component: InboxComponent },
    { path: 'sent', component: SentComponent },
    { path: 'starred', component: StarredComponent },
    { path: 'draft', component: DraftComponent },
    { path: 'chats', component: ChatsComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'all', component: AllComponent },
    { path: 'important', component: ImportantComponent },
    { path: 'spam', component: SpamComponent },
    { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
