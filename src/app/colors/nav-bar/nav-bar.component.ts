import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems = [

    {
      name: 'profile',
      icon: "person",
      label: "profile"
    },
    {
      name: 'messages',
      icon: "mail",
      label: "messages"
    }, {
      name: 'dashboard',
      icon: "home",
      label: "dashboard"
    },
    {
      name: 'settings',
      icon: "settings",
      label: "settings"
    },
    {
      name: 'upload',
      icon: "upload",
      label: "upload"
    },
    {
      name: 'tune',
      icon: "tune",
      label: "tune"
    }
  ]
  currentRoute

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentRoute = this.navItems[0].label


  }


  async goToItem(itemLabel: any) {

    await this.router.navigate(["/colors/" + itemLabel])
    this.currentRoute = itemLabel

  }


}
