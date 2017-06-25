import { Component, OnInit } from '@angular/core';
import { DashboardNotificationBarComponent } from "../dashboard-notification-bar/dashboard-notification-bar.component"
import { navbarVisible } from "../dashboard-notification-bar/dashboard-notification-bar.component"
import { Router } from "@angular/router"

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {

  }

  activeSubMenu: number = -1

  navbarStyle() {
    let minHeight = (document.getElementsByClassName("top-level-navbar")[0].children.length * 45) + 50
    if(navbarVisible) {
      return {"left": "0"}
    } else {
      return {"left": "-100vw"}
    }
  }

  setActiveSubMenu(index) {
    let carets = document.getElementsByClassName("fa-caret-right")
    for(let i = 0; i < carets.length; i++) {
      if(i != index) {
        carets[i].classList.remove("fa-caret-right-transform")
      }
    }
    if(carets[index]) {
      carets[index].classList.toggle("fa-caret-right-transform")
    }
    if(index == this.activeSubMenu) {
      this.activeSubMenu = -1
    } else {
      this.activeSubMenu = index
    }
  }

  subMenuStyle(index) {
    let minHeight = (document.getElementsByClassName("second-level-navbar")[index].children.length * 45)
    if(index == this.activeSubMenu) {
      return {"height": `${minHeight}px`}
    } else {
      return {"height": "0px"}
    }
  }

  clearComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': ['home']}}]);
  }

  setComponent(component) {
    this.router.navigate(['/dashboard/data-generators', {outlets: {'dashboardOutlet': [component]}}]);
  }

}
