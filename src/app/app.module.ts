import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ColorsComponent} from './colors/colors.component';
import {RouterModule} from "@angular/router";
import {NavBarComponent} from './colors/shared/nav-bar/nav-bar.component';
import {DashboardComponent} from './colors/views/dashboard/dashboard.component';
import {AppRoutingModule} from "./app.routing";
import {ProfileComponent} from './colors/views/profile/profile.component';
import {MessagesComponent} from './colors/views/messages/messages.component';
import {MatIconModule} from "@angular/material/icon";
import {StoriesComponent} from './colors/views/stories/stories.component';
import {StoryComponent} from './colors/views/stories/story/story.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    NavBarComponent,
    DashboardComponent,
    ProfileComponent,
    MessagesComponent,
    StoriesComponent,
    StoryComponent,
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
