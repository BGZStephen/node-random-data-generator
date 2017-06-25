import { Component, OnInit } from '@angular/core';
import { DashboardNotificationBarComponent } from "../dashboard-notification-bar/dashboard-notification-bar.component"
import { navbarVisible } from "../dashboard-notification-bar/dashboard-notification-bar.component"

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {

  }

  navbarStyle() {

    let minHeight = (document.getElementsByClassName("top-level-navbar")[0].children.length * 45) + 50
    if(navbarVisible) {
      return {"max-height": "100vh", "min-height": `${minHeight}px`}
    } else {
      return {"max-height": "0px", "min-height": "0px"}
    }
  }

}
