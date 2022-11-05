import {Routes} from '@angular/router';
import {ColorsComponent} from "./colors.component";
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {MessagesComponent} from "./views/messages/messages.component";

export const ColorsRouting: Routes = [
  {
    path: 'colors',
    component: ColorsComponent,
    canActivateChild: [],
    children: [
      {
        path: '',
        component: NavBarComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          }, {
            path: 'profile',
            component: ProfileComponent,
          }, {
            path: 'messages',
            component: MessagesComponent,
          },
        ]
      },
    ]
  }
];
