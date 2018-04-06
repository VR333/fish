import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent } from './messages-common/app.component';

const routes: Routes = [
    { path: '', redirectTo: 'inbox', pathMatch: 'full' },
    { path: 'messages/:type', component: MessageComponent },
    { path: 'category/advertisment', component: MessageComponent },
    { path: 'category/updates', component: MessageComponent },
    { path: 'category/social', component: MessageComponent },
    { path: 'category/forums', component: MessageComponent },
    { path: '**', redirectTo: 'messages/inbox' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
