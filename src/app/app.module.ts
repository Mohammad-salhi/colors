import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ColorsComponent} from './colors/colors.component';
import {RouterModule} from "@angular/router";
import {NavBarComponent} from './colors/nav-bar/nav-bar.component';
import {DashboardComponent} from './colors/dashboard/dashboard.component';
import {AppRoutingModule} from "./app.routing";
import { ProfileComponent } from './colors/profile/profile.component';
import { MessagesComponent } from './colors/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    NavBarComponent,
    DashboardComponent,
    ProfileComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
