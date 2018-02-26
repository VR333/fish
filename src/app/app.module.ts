import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/app.component';
import { HeaderComponent } from './header/app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
